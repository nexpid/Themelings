// app/modules/notification_center/NotificationCenterItemsStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun55170: for(var _fun55170_ip = 0; ; ) switch(_fun55170_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun55170_ip = 51; continue _fun55170 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun55170_ip = 92; continue _fun55170;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun55170_ip = 71; continue _fun55170 }
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
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun55171: for(var _fun55171_ip = 0; ; ) switch(_fun55171_ip) {
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
            _fun55171_ip = 74; continue _fun55171;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: _validate
        _fun55174: for(var _fun55174_ip = 0; ; ) switch(_fun55174_ip) {
 0:
            mike = argFoo;
            entity = mike.id;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun55174_ip = 26; continue _fun55174 }
 17:
            mike = mike.type;
            entity = zulu != mike;
 26:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: handleReset
        _fun55175: for(var _fun55175_ip = 0; ; ) switch(_fun55175_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun55175_ip = 11; continue _fun55175 }
 9:
            mike = {};
 11:
            tango = mike.keepLocalItems;
            if(!(tango === entity)) { _fun55175_ip = 23; continue _fun55175 }
 21:
            tango = false;
 23:
            zulu = {'loading': false, 'initialized': false, 'errored': false, 'isDataStale': false};
            mike = false;
            report = new Array(0);
            zulu['notifCenterItems'] = report;
            report = new Array(0);
            zulu['staleNotifCenterItems'] = report;
            report = global;
            report = report.Set;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            golf = oscar;
            report = new golf[report](oscar);
            report = report instanceof Object ? report : oscar;
            zulu['notifCenterIds'] = report;
            if(tango) { _fun55175_ip = 95; continue _fun55175 }
 89:
            tango = new Array(0);
            _fun55175_ip = 108; continue _fun55175;
 95:
            report = _closure1_slot14;
            tango = report.notifCenterLocalItems;
 108:
            zulu['notifCenterLocalItems'] = tango;
            tango = true;
            zulu['paginationHasMore'] = tango;
            zulu['paginationCursor'] = entity;
            zulu['notifCenterActive'] = mike;
            zulu['notifCenterTabFocused'] = mike;
            _closure1_slot14 = zulu;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: handleResetRemoteState
        zulu = _closure1_slot18;
        mike = {};
        entity = true;
        mike['keepLocalItems'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: toNotificationCenterItem
        _fun55177: for(var _fun55177_ip = 0; ; ) switch(_fun55177_ip) {
 0:
            mike = argFoo;
            report = mike.item_enum;
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            options = 11;
            entity = entity[options];
            zulu = undefined;
            entity = oscar.bind(zulu)(entity);
            entity = entity.ItemEnum;
            entity = entity.FIRST_MESSAGE;
            entity = report === entity;
            if(!entity) { _fun55177_ip = 91; continue _fun55177 }
 53:
            oscar = mike.type;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            report = report[options];
            report = golf.bind(zulu)(report);
            report = report.NotificationCenterItems;
            report = report.LIFECYCLE_ITEM;
            entity = oscar === report;
 91:
            if(!entity) { _fun55177_ip = 106; continue _fun55177 }
 94:
            entity = 'https://discord.com/feature/composeMessage';
            mike['deeplink'] = entity;
 106:
            entity = {};
            offset = entity;
            verify = mike;
            report = copyDataProperties(offset, verify);
            oscar = 'notification-center-item';
            report = 'kind';
            entity[report] = oscar;
            oscar = mike.message;
            report = null;
            golf = report != oscar;
            oscar = undefined;
            if(!golf) { _fun55177_ip = 185; continue _fun55177 }
 149:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            tango = 12;
            tango = options[tango];
            options = golf.bind(zulu)(tango);
            golf = options.createMessageRecord;
            tango = mike.message;
            oscar = golf.bind(options)(tango);
 185:
            tango = 'message';
            entity[tango] = oscar;
            tango = mike.application;
            tango = report != tango;
            zulu = undefined;
            if(!tango) { _fun55177_ip = 218; continue _fun55177 }
 208:
            mike = mike.application;
            zulu = mike.id;
 218:
            mike = 'applicationId';
            entity[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    offset = function(argFoo) { // Original name: handleAddItem
        _fun55178: for(var _fun55178_ip = 0; ; ) switch(_fun55178_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'NOTIFICATION_CENTER_ITEM_CREATE';
            if(!(mike !== zulu)) { _fun55178_ip = 23; continue _fun55178 }
 16:
            report = entity.item;
            _fun55178_ip = 42; continue _fun55178;
 23:
            zulu = _closure1_slot20;
            mike = entity.item;
            entity = undefined;
            report = zulu.bind(entity)(mike);
 42:
            entity = _closure1_slot14;
            entity = entity.initialized;
            if(!entity) { _fun55178_ip = 196; continue _fun55178 }
 61:
            zulu = _closure1_slot17;
            entity = undefined;
            zulu = zulu.bind(entity)(report);
            if(!zulu) { _fun55178_ip = 196; continue _fun55178 }
 75:
            zulu = _closure1_slot14;
            oscar = zulu.notifCenterIds;
            tango = oscar.has;
            zulu = report.id;
            zulu = tango.bind(oscar)(zulu);
            if(zulu) { _fun55178_ip = 196; continue _fun55178 }
 103:
            zulu = _closure1_slot14;
            oscar = zulu.notifCenterIds;
            tango = oscar.add;
            zulu = report.id;
            zulu = tango.bind(oscar)(zulu);
            tango = _closure1_slot14;
            zulu = new Array(1);
            zulu[0] = report;
            report = _closure1_slot14;
            options = report.notifCenterItems;
            golf = 1;
            verify = zulu;
            report = arraySpread(verify, options, golf);
            tango['notifCenterItems'] = zulu;
            mike = _closure1_slot14;
            tango = mike.notifCenterItems;
            zulu = tango.sort;
            mike = function(argFoo, argBar) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.compare;
                entity = argBar;
                mike = entity.id;
                entity = argFoo;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
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
        mike = _closure1_slot14;
        report = mike.notifCenterItems;
        tango = report.map;
        zulu = function(argFoo) {
            _fun55181: for(var _fun55181_ip = 0; ; ) switch(_fun55181_ip) {
 0:
                tango = argFoo;
                report = _closure2_slot0;
                mike = report.includes;
                entity = tango.id;
                mike = mike.bind(report)(entity);
                entity = tango;
                if(!mike) { _fun55181_ip = 59; continue _fun55181 }
 31:
                mike = {};
                golf = mike;
                oscar = tango;
                tango = copyDataProperties(golf, oscar);
                tango = _closure2_slot1;
                zulu = 'acked';
                mike[zulu] = tango;
                entity = mike;
 59:
                return entity;
            }
        };
        tango = tango.bind(report)(zulu);
        zulu = tango.filter;
        entity = _closure1_slot17;
        entity = zulu.bind(tango)(entity);
        mike['notifCenterItems'] = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: isItem
        _fun55182: for(var _fun55182_ip = 0; ; ) switch(_fun55182_ip) {
 0:
            mike = argFoo;
            zulu = mike.type;
            entity = argBar;
            entity = zulu === entity;
            if(!entity) { _fun55182_ip = 47; continue _fun55182 }
 18:
            mike = mike.other_user;
            zulu = null;
            tango = zulu == mike;
            zulu = undefined;
            if(tango) { _fun55182_ip = 40; continue _fun55182 }
 35:
            zulu = mike.id;
 40:
            mike = argBaz;
            entity = zulu === mike;
 47:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: isGameRelationshipItem
        _fun55183: for(var _fun55183_ip = 0; ; ) switch(_fun55183_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot22;
            tango = undefined;
            zulu = argBar;
            entity = argBaz;
            entity = report.bind(tango)(mike, zulu, entity);
            if(!entity) { _fun55183_ip = 40; continue _fun55183 }
 28:
            zulu = mike.applicationId;
            mike = argCorge;
            entity = zulu === mike;
 40:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    verify = function(argFoo) { // Original name: handleRelationshipAddOrUpdate
        _fun55184: for(var _fun55184_ip = 0; ; ) switch(_fun55184_ip) {
 0:
            mike = argFoo;
            oscar = mike.relationship;
            var _closure2_slot0 = oscar;
            mike = oscar.id;
            var _closure2_slot1 = mike;
            report = oscar.type;
            zulu = oscar.isSpamRequest;
            tango = oscar.userIgnored;
            golf = oscar.user;
            var _closure2_slot2 = golf;
            backup = oscar.since;
            options = oscar.originApplicationId;
            verify = _closure1_slot13;
            verify = verify.PENDING_INCOMING;
            if(!(report === verify)) { _fun55184_ip = 311; continue _fun55184 }
 82:
            if(zulu) { _fun55184_ip = 311; continue _fun55184 }
 88:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 14;
            zulu = offset[zulu];
            kilo = undefined;
            offset = verify.bind(kilo)(zulu);
            verify = offset.isEligibleForStealthRemediation;
            zulu = {};
            yankee = 'notification-center';
            zulu['location'] = yankee;
            zulu = verify.bind(offset)(zulu);
            if(!zulu) { _fun55184_ip = 142; continue _fun55184 }
 136:
            if(tango) { _fun55184_ip = 311; continue _fun55184 }
 142:
            zulu = null;
            if(!(zulu != backup)) { _fun55184_ip = 309; continue _fun55184 }
 151:
            if(!(zulu != golf)) { _fun55184_ip = 311; continue _fun55184 }
 158:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 13;
            verify = yankee[verify];
            yankee = offset.bind(kilo)(verify);
            offset = yankee.getIsFriendTiersUIEnabled;
            verify = {};
            romeo = 'NotificationCenterItemsStore';
            verify['location'] = romeo;
            verify = offset.bind(yankee)(verify);
            foxtrot = undefined;
            if(!verify) { _fun55184_ip = 209; continue _fun55184 }
 206:
            foxtrot = options;
 209:
            verify = _closure1_slot12;
            options = verify.getUser;
            golf = golf.id;
            romeo = options.bind(verify)(golf);
            if(!(zulu != romeo)) { _fun55184_ip = 311; continue _fun55184 }
 233:
            options = _closure1_slot14;
            result = options.notifCenterLocalItems;
            golf = new Array(1);
            output = 0;
            echo = golf;
            offset = arraySpread(echo, result, output);
            yankee = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 15;
            verify = sizing[verify];
            yankee = yankee.bind(kilo)(verify);
            verify = yankee.incomingFriendRequestLocalItem;
            verify = verify.bind(yankee)(romeo, backup, foxtrot);
            golf[offset] = verify;
            verify = 1;
            verify = offset + verify;
            options['notifCenterLocalItems'] = golf;
            _fun55184_ip = 311; continue _fun55184;
 309:
            return zulu;
 311:
            zulu = _closure1_slot13;
            zulu = zulu.FRIEND;
            zulu = report !== zulu;
            if(zulu) { _fun55184_ip = 339; continue _fun55184 }
 328:
            golf = oscar.user;
            oscar = null;
            zulu = oscar == golf;
 339:
            if(zulu) { _fun55184_ip = 345; continue _fun55184 }
 342:
            zulu = tango;
 345:
            if(zulu) { _fun55184_ip = 379; continue _fun55184 }
 348:
            oscar = _closure1_slot14;
            options = oscar.notifCenterLocalItems;
            golf = options.map;
            zulu = function(argFoo) {
                _fun55185: for(var _fun55185_ip = 0; ; ) switch(_fun55185_ip) {
 0:
                    tango = argFoo;
                    options = _closure1_slot22;
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 11;
                    entity = entity[oscar];
                    report = undefined;
                    entity = mike.bind(report)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    mike = entity.INCOMING_FRIEND_REQUESTS;
                    entity = _closure2_slot0;
                    entity = entity.user;
                    entity = entity.id;
                    mike = options.bind(report)(tango, mike, entity);
                    entity = tango;
                    if(!mike) { _fun55185_ip = 205; continue _fun55185 }
 77:
                    mike = {};
                    foxtrot = mike;
                    romeo = tango;
                    options = copyDataProperties(foxtrot, romeo);
                    verify = true;
                    options = 'acked';
                    mike[options] = verify;
                    verify = false;
                    options = 'forceUnacked';
                    mike[options] = verify;
                    golf = _closure2_slot2;
                    offset = golf.id;
                    verify = tango.id;
                    tango = global;
                    tango = tango.HermesInternal;
                    options = tango.concat;
                    golf = 'incoming_friend_requests_accepted_';
                    tango = '_';
                    golf = options.bind(golf)(offset, tango, verify);
                    tango = 'local_id';
                    mike[tango] = golf;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    zulu = tango.bind(report)(zulu);
                    zulu = zulu.NotificationCenterLocalItems;
                    tango = zulu.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                    zulu = 'type';
                    mike[zulu] = tango;
                    entity = mike;
 205:
                    return entity;
                }
            };
            zulu = golf.bind(options)(zulu);
            oscar['notifCenterLocalItems'] = zulu;
 379:
            zulu = _closure1_slot13;
            zulu = zulu.BLOCKED;
            zulu = report === zulu;
            if(zulu) { _fun55184_ip = 399; continue _fun55184 }
 396:
            zulu = tango;
 399:
            if(!zulu) { _fun55184_ip = 433; continue _fun55184 }
 402:
            mike = _closure1_slot14;
            tango = mike.notifCenterLocalItems;
            zulu = tango.filter;
            entity = function(argFoo) {
                _fun55186: for(var _fun55186_ip = 0; ; ) switch(_fun55186_ip) {
 0:
                    oscar = argFoo;
                    golf = _closure1_slot22;
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    options = 11;
                    entity = entity[options];
                    report = undefined;
                    entity = mike.bind(report)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    tango = entity.INCOMING_FRIEND_REQUESTS;
                    entity = _closure2_slot1;
                    entity = golf.bind(report)(oscar, tango, entity);
                    if(entity) { _fun55186_ip = 105; continue _fun55186 }
 61:
                    verify = _closure1_slot22;
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = golf.bind(report)(tango);
                    tango = tango.NotificationCenterLocalItems;
                    golf = tango.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                    tango = _closure2_slot1;
                    entity = verify.bind(report)(oscar, golf, tango);
 105:
                    if(entity) { _fun55186_ip = 152; continue _fun55186 }
 108:
                    verify = _closure1_slot22;
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = golf.bind(report)(tango);
                    tango = tango.NotificationCenterLocalItems;
                    golf = tango.INCOMING_GAME_FRIEND_REQUESTS;
                    tango = _closure2_slot1;
                    entity = verify.bind(report)(oscar, golf, tango);
 152:
                    if(entity) { _fun55186_ip = 199; continue _fun55186 }
 155:
                    tango = _closure1_slot22;
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[options];
                    zulu = golf.bind(report)(zulu);
                    zulu = zulu.NotificationCenterLocalItems;
                    zulu = zulu.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    mike = _closure2_slot1;
                    entity = tango.bind(report)(oscar, zulu, mike);
 199:
                    entity = !entity;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            mike['notifCenterLocalItems'] = entity;
 433:
            entity = undefined;
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: updateGuildEvent
        _fun55187: for(var _fun55187_ip = 0; ; ) switch(_fun55187_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tango = _closure1_slot9;
            entity = undefined;
            tango = tango.bind(entity)(report);
            if(!tango) { _fun55187_ip = 57; continue _fun55187 }
 26:
            zulu = _closure1_slot14;
            report = zulu.notifCenterItems;
            tango = report.map;
            mike = function(argFoo) {
                _fun55188: for(var _fun55188_ip = 0; ; ) switch(_fun55188_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.type;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    entity = report.bind(entity)(mike);
                    entity = entity.NotificationCenterItems;
                    mike = entity.GUILD_SCHEDULED_EVENT_STARTED;
                    entity = zulu;
                    if(!(tango === mike)) { _fun55188_ip = 105; continue _fun55188 }
 52:
                    tango = zulu.guild_scheduled_event_id;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu;
                    if(!(tango === mike)) { _fun55188_ip = 105; continue _fun55188 }
 77:
                    mike = {};
                    golf = mike;
                    oscar = zulu;
                    zulu = copyDataProperties(golf, oscar);
                    tango = true;
                    zulu = 'disable_action';
                    mike[zulu] = tango;
                    entity = mike;
 105:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            zulu['notifCenterItems'] = mike;
 57:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    romeo = global;
    foxtrot = romeo.Object;
    options = foxtrot.defineProperty;
    mike = {};
    yankee = true;
    mike['value'] = yankee;
    entity = '__esModule';
    entity = options.bind(foxtrot)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.isGuildEventEnded;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.RelationshipTypes;
    var _closure1_slot13 = mike;
    mike = {'loading': false, 'initialized': false, 'errored': false, 'isDataStale': false};
    options = false;
    foxtrot = new Array(0);
    mike['notifCenterItems'] = foxtrot;
    foxtrot = new Array(0);
    mike['staleNotifCenterItems'] = foxtrot;
    romeo = romeo.Set;
    foxtrot = romeo.prototype;
    foxtrot = Object.create(foxtrot, {constructor: {value: romeo}});
    output = foxtrot;
    romeo = new output[romeo](sizing);
    romeo = romeo instanceof Object ? romeo : foxtrot;
    mike['notifCenterIds'] = romeo;
    romeo = new Array(0);
    mike['notifCenterLocalItems'] = romeo;
    mike['paginationHasMore'] = yankee;
    mike['paginationCursor'] = entity;
    mike['notifCenterActive'] = options;
    mike['notifCenterTabFocused'] = options;
    var _closure1_slot14 = mike;
    mike = 17;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: NotificationCenterItemsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot15;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun55191: for(var _fun55191_ip = 0; ; ) switch(_fun55191_ip) {
 0:
                entity = argFoo;
                golf = this;
                oscar = golf.waitFor;
                report = _closure1_slot12;
                tango = _closure1_slot11;
                zulu = _closure1_slot8;
                zulu = oscar.bind(golf)(report, tango, zulu);
                zulu = null;
                if(!(zulu != entity)) { _fun55191_ip = 133; continue _fun55191 }
 40:
                tango = entity.notifCenterItems;
                zulu = tango.map;
                entity = function(argFoo) {
                    _fun55192: for(var _fun55192_ip = 0; ; ) switch(_fun55192_ip) {
 0:
                        mike = argFoo;
                        entity = {};
                        golf = entity;
                        oscar = mike;
                        zulu = copyDataProperties(golf, oscar);
                        tango = mike.message;
                        zulu = null;
                        tango = zulu != tango;
                        zulu = undefined;
                        if(!tango) { _fun55192_ip = 63; continue _fun55192 }
 31:
                        report = _closure1_slot10;
                        golf = mike.message;
                        tango = report.prototype;
                        tango = Object.create(tango, {constructor: {value: report}});
                        options = tango;
                        mike = new options[report](golf, oscar);
                        zulu = mike instanceof Object ? mike : tango;
 63:
                        mike = 'message';
                        entity[mike] = zulu;
                        return entity;
                    }
                };
                tango = zulu.bind(tango)(entity);
                zulu = tango.length;
                entity = 0;
                if(!(zulu > entity)) { _fun55191_ip = 133; continue _fun55191 }
 74:
                entity = {};
                verify = _closure1_slot14;
                offset = entity;
                zulu = copyDataProperties(offset, verify);
                report = true;
                zulu = 'initialized';
                entity[zulu] = report;
                zulu = 'isDataStale';
                entity[zulu] = report;
                report = new Array(0);
                zulu = 'notifCenterItems';
                entity[zulu] = report;
                zulu = 'staleNotifCenterItems';
                entity[zulu] = tango;
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
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = function(argFoo) { // Original name: pack
                _fun55194: for(var _fun55194_ip = 0; ; ) switch(_fun55194_ip) {
 0:
                    mike = argFoo;
                    entity = {};
                    oscar = entity;
                    report = mike;
                    zulu = copyDataProperties(oscar, report);
                    tango = mike.message;
                    zulu = null;
                    tango = zulu != tango;
                    zulu = undefined;
                    if(!tango) { _fun55194_ip = 46; continue _fun55194 }
 31:
                    tango = mike.message;
                    mike = tango.toJS;
                    zulu = mike.bind(tango)();
 46:
                    mike = 'message';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            entity = {};
            oscar = _closure1_slot14;
            golf = entity;
            zulu = copyDataProperties(golf, oscar);
            zulu = _closure1_slot14;
            report = zulu.notifCenterItems;
            zulu = report.map;
            report = zulu.bind(report)(tango);
            zulu = 'notifCenterItems';
            entity[zulu] = report;
            mike = _closure1_slot14;
            zulu = mike.staleNotifCenterItems;
            mike = zulu.map;
            zulu = mike.bind(zulu)(tango);
            mike = 'staleNotifCenterItems';
            entity[mike] = zulu;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'loading';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.loading;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'initialized';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.initialized;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'items';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun55197: for(var _fun55197_ip = 0; ; ) switch(_fun55197_ip) {
 0:
                entity = _closure1_slot14;
                entity = entity.isDataStale;
                mike = _closure1_slot14;
                if(entity) { _fun55197_ip = 28; continue _fun55197 }
 20:
                entity = mike.notifCenterItems;
                _fun55197_ip = 34; continue _fun55197;
 28:
                entity = mike.staleNotifCenterItems;
 34:
                return entity;
            }
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'hasMore';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.paginationHasMore;
            return entity;
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'cursor';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.paginationCursor;
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'errored';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.errored;
            return entity;
        };
        report['get'] = golf;
        entity[7] = report;
        report = {};
        golf = 'active';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.notifCenterActive;
            return entity;
        };
        report['get'] = golf;
        entity[8] = report;
        report = {};
        golf = 'localItems';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.notifCenterLocalItems;
            return entity;
        };
        report['get'] = golf;
        entity[9] = report;
        report = {};
        golf = 'tabFocused';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot14;
            entity = entity.notifCenterTabFocused;
            return entity;
        };
        report['get'] = oscar;
        entity[10] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'NotificationCenterItemsStore';
    options['displayName'] = mike;
    mike = 'NotificationCenterItemsStore_v2';
    options['persistKey'] = mike;
    mike = 18;
    mike = oscar[mike];
    sizing = golf.bind(entity)(mike);
    mike = {};
    yankee = function(argFoo) { // Original name: handleConnectionOpen
        _fun55204: for(var _fun55204_ip = 0; ; ) switch(_fun55204_ip) {
 0:
            report = argFoo;
            zulu = new Array(0);
            var _closure2_slot0 = zulu;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 13;
            oscar = verify[entity];
            entity = undefined;
            offset = options.bind(entity)(oscar);
            golf = offset.getIsFriendTiersUIEnabled;
            oscar = {};
            yankee = 'NotificationCenterItemsStore';
            oscar['location'] = yankee;
            oscar = golf.bind(offset)(oscar);
            var _closure2_slot1 = oscar;
            golf = 14;
            golf = verify[golf];
            verify = options.bind(entity)(golf);
            options = verify.isEligibleForStealthRemediation;
            golf = {};
            offset = 'notification-center';
            golf['location'] = offset;
            golf = options.bind(verify)(golf);
            var _closure2_slot2 = golf;
            golf = global;
            golf = golf.Set;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            foxtrot = options;
            golf = new foxtrot[golf](romeo);
            golf = golf instanceof Object ? golf : options;
            var _closure2_slot3 = golf;
            verify = report.relationships;
            options = verify.forEach;
            golf = function(argFoo) {
                _fun55205: for(var _fun55205_ip = 0; ; ) switch(_fun55205_ip) {
 0:
                    entity = argFoo;
                    options = entity.type;
                    mike = entity.user;
                    verify = entity.since;
                    oscar = entity.is_spam_request;
                    zulu = entity.user_ignored;
                    report = entity.origin_application_id;
                    entity = _closure2_slot2;
                    if(!entity) { _fun55205_ip = 50; continue _fun55205 }
 47:
                    entity = zulu;
 50:
                    zulu = entity;
                    if(!zulu) { _fun55205_ip = 62; continue _fun55205 }
 56:
                    golf = null;
                    zulu = golf != mike;
 62:
                    if(!zulu) { _fun55205_ip = 84; continue _fun55205 }
 65:
                    offset = _closure2_slot3;
                    golf = offset.add;
                    zulu = mike.id;
                    zulu = golf.bind(offset)(zulu);
 84:
                    golf = _closure1_slot13;
                    golf = golf.PENDING_INCOMING;
                    if(!(options === golf)) { _fun55205_ip = 208; continue _fun55205 }
 101:
                    if(oscar) { _fun55205_ip = 208; continue _fun55205 }
 104:
                    if(entity) { _fun55205_ip = 208; continue _fun55205 }
 107:
                    entity = null;
                    if(!(entity != mike)) { _fun55205_ip = 206; continue _fun55205 }
 113:
                    if(!(entity != verify)) { _fun55205_ip = 206; continue _fun55205 }
 117:
                    golf = _closure1_slot12;
                    oscar = golf.getUser;
                    mike = mike.id;
                    options = oscar.bind(golf)(mike);
                    if(!(entity != options)) { _fun55205_ip = 204; continue _fun55205 }
 141:
                    oscar = _closure2_slot1;
                    mike = undefined;
                    golf = undefined;
                    if(!oscar) { _fun55205_ip = 155; continue _fun55205 }
 152:
                    golf = report;
 155:
                    report = _closure2_slot0;
                    tango = report.push;
                    oscar = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 15;
                    zulu = offset[zulu];
                    oscar = oscar.bind(mike)(zulu);
                    zulu = oscar.incomingFriendRequestLocalItem;
                    zulu = zulu.bind(oscar)(options, verify, golf);
                    zulu = tango.bind(report)(zulu);
                    return mike;
 204:
                    return entity;
 206:
                    return entity;
 208:
                    entity = null;
                    return entity;
                }
            };
            golf = options.bind(verify)(golf);
            if(!oscar) { _fun55204_ip = 181; continue _fun55204 }
 160:
            options = report.gameRelationships;
            golf = options.forEach;
            oscar = function(argFoo) {
                _fun55206: for(var _fun55206_ip = 0; ; ) switch(_fun55206_ip) {
 0:
                    entity = argFoo;
                    report = entity.type;
                    options = entity.id;
                    golf = entity.application_id;
                    oscar = entity.since;
                    zulu = null;
                    if(!(zulu != options)) { _fun55206_ip = 140; continue _fun55206 }
 31:
                    tango = _closure2_slot3;
                    entity = tango.has;
                    entity = entity.bind(tango)(options);
                    if(entity) { _fun55206_ip = 140; continue _fun55206 }
 51:
                    if(!(zulu != oscar)) { _fun55206_ip = 140; continue _fun55206 }
 55:
                    tango = _closure1_slot13;
                    tango = tango.PENDING_INCOMING;
                    if(!(report === tango)) { _fun55206_ip = 140; continue _fun55206 }
 72:
                    report = _closure1_slot12;
                    tango = report.getUser;
                    report = tango.bind(report)(options);
                    if(!(zulu != report)) { _fun55206_ip = 140; continue _fun55206 }
 91:
                    zulu = _closure2_slot0;
                    mike = zulu.push;
                    options = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 15;
                    tango = tango[entity];
                    entity = undefined;
                    tango = options.bind(entity)(tango);
                    entity = tango.incomingGameFriendRequestLocalItem;
                    entity = entity.bind(tango)(report, oscar, golf);
                    entity = mike.bind(zulu)(entity);
 140:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar);
 181:
            oscar = report.guilds;
            report = oscar.forEach;
            tango = function(argFoo) {
                entity = argFoo;
                zulu = entity.guild_scheduled_events;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = _closure1_slot24;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            mike = _closure1_slot14;
            mike['notifCenterLocalItems'] = zulu;
            return entity;
        }
    };
    mike['CONNECTION_OPEN'] = yankee;
    yankee = function() { // Original name: LOGOUT
        mike = _closure1_slot18;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['LOGOUT'] = yankee;
    yankee = function(argFoo) { // Original name: handleAck
        entity = argFoo;
        tango = entity.ids;
        zulu = _closure1_slot21;
        entity = undefined;
        mike = true;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['NOTIFICATION_CENTER_ITEMS_ACK'] = yankee;
    yankee = function(argFoo) { // Original name: handleAckFailure
        entity = argFoo;
        tango = entity.ids;
        zulu = _closure1_slot21;
        entity = undefined;
        mike = false;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['NOTIFICATION_CENTER_ITEMS_ACK_FAILURE'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildScheduledEventUpdate
        entity = argFoo;
        zulu = entity.guildScheduledEvent;
        mike = _closure1_slot24;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['GUILD_SCHEDULED_EVENT_UPDATE'] = yankee;
    mike['NOTIFICATION_CENTER_ITEM_CREATE'] = offset;
    yankee = function(argFoo) { // Original name: handleDelete
        _fun55213: for(var _fun55213_ip = 0; ; ) switch(_fun55213_ip) {
 0:
            mike = argFoo;
            report = mike.id;
            var _closure2_slot0 = report;
            zulu = _closure1_slot14;
            tango = zulu.notifCenterIds;
            zulu = tango.has;
            zulu = zulu.bind(tango)(report);
            if(zulu) { _fun55213_ip = 44; continue _fun55213 }
 40:
            zulu = false;
            return zulu;
 44:
            zulu = _closure1_slot14;
            tango = zulu.notifCenterIds;
            zulu = tango.delete;
            zulu = zulu.bind(tango)(report);
            mike = _closure1_slot14;
            tango = mike.notifCenterItems;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike !== entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['notifCenterItems'] = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['NOTIFICATION_CENTER_ITEM_DELETE'] = yankee;
    mike['NOTIFICATION_CENTER_ITEM_DELETE_FAILURE'] = offset;
    offset = function() { // Original name: handleLoad
        mike = _closure1_slot14;
        entity = true;
        mike['loading'] = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_NOTIFICATION_CENTER_ITEMS'] = offset;
    offset = function() { // Original name: handleLoadFailure
        zulu = _closure1_slot14;
        mike = false;
        zulu['loading'] = mike;
        zulu = _closure1_slot14;
        mike = true;
        zulu['initialized'] = mike;
        entity = _closure1_slot14;
        entity['errored'] = mike;
        entity = undefined;
        return entity;
    };
    mike['LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: handleLoadSuccess
        _fun55217: for(var _fun55217_ip = 0; ; ) switch(_fun55217_ip) {
 0:
            mike = argFoo;
            zulu = mike.items;
            options = mike.hasMore;
            oscar = mike.cursor;
            tango = _closure1_slot14;
            tango = tango.loading;
            if(!tango) { _fun55217_ip = 278; continue _fun55217 }
 42:
            tango = _closure1_slot14;
            report = false;
            tango['loading'] = report;
            golf = _closure1_slot14;
            tango = true;
            golf['initialized'] = tango;
            tango = _closure1_slot14;
            tango['errored'] = report;
            tango = _closure1_slot14;
            tango['isDataStale'] = report;
            tango = null;
            tango = tango != oscar;
            if(!tango) { _fun55217_ip = 115; continue _fun55217 }
 95:
            report = _closure1_slot14;
            golf = report.notifCenterIds;
            report = golf.has;
            tango = report.bind(golf)(oscar);
 115:
            if(tango) { _fun55217_ip = 172; continue _fun55217 }
 118:
            report = _closure1_slot14;
            tango = zulu.length;
            golf = 0;
            tango = tango > golf;
            if(!tango) { _fun55217_ip = 139; continue _fun55217 }
 136:
            tango = options;
 139:
            report['paginationHasMore'] = tango;
            report = _closure1_slot14;
            tango = zulu.length;
            golf = tango > golf;
            tango = undefined;
            if(!golf) { _fun55217_ip = 166; continue _fun55217 }
 163:
            tango = oscar;
 166:
            report['paginationCursor'] = tango;
 172:
            report = _closure1_slot14;
            yankee = report.notifCenterItems;
            tango = new Array(0);
            offset = 0;
            romeo = tango;
            offset = arraySpread(romeo, yankee, offset);
            options = zulu.map;
            oscar = _closure1_slot20;
            verify = options.bind(zulu)(oscar);
            options = verify.filter;
            oscar = function(argFoo) {
                entity = _closure1_slot14;
                zulu = entity.notifCenterIds;
                mike = zulu.has;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            yankee = options.bind(verify)(oscar);
            romeo = tango;
            oscar = arraySpread(romeo, yankee, offset);
            report['notifCenterItems'] = tango;
            mike = _closure1_slot14;
            report = mike.notifCenterItems;
            tango = report.sort;
            mike = function(argFoo, argBar) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.compare;
                entity = argBar;
                mike = entity.id;
                entity = argFoo;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = tango.bind(report)(mike);
            mike = zulu.forEach;
            entity = function(argFoo) {
                entity = _closure1_slot14;
                zulu = entity.notifCenterIds;
                mike = zulu.add;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 278:
            entity = undefined;
            return entity;
        }
    };
    mike['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = offset;
    offset = function() { // Original name: RESET_NOTIFICATION_CENTER
        mike = _closure1_slot19;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['RESET_NOTIFICATION_CENTER'] = offset;
    offset = function(argFoo) { // Original name: handleSetActive
        entity = argFoo;
        mike = entity.active;
        entity = _closure1_slot14;
        entity['notifCenterActive'] = mike;
        entity = undefined;
        return entity;
    };
    mike['NOTIFICATION_CENTER_SET_ACTIVE'] = offset;
    offset = function(argFoo) { // Original name: handleTabFocused
        entity = argFoo;
        mike = entity.focused;
        entity = _closure1_slot14;
        entity['notifCenterTabFocused'] = mike;
        entity = undefined;
        return entity;
    };
    mike['NOTIFICATION_CENTER_TAB_FOCUSED'] = offset;
    mike['RELATIONSHIP_ADD'] = verify;
    mike['RELATIONSHIP_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleRelationshipRemove
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = _closure1_slot14;
        tango = mike.notifCenterLocalItems;
        zulu = tango.filter;
        entity = function(argFoo) {
            _fun55225: for(var _fun55225_ip = 0; ; ) switch(_fun55225_ip) {
 0:
                oscar = argFoo;
                golf = _closure1_slot22;
                mike = _closure1_slot0;
                entity = _closure1_slot2;
                options = 11;
                entity = entity[options];
                report = undefined;
                entity = mike.bind(report)(entity);
                entity = entity.NotificationCenterLocalItems;
                tango = entity.INCOMING_FRIEND_REQUESTS;
                entity = _closure2_slot0;
                entity = entity.relationship;
                entity = entity.id;
                tango = golf.bind(report)(oscar, tango, entity);
                entity = !tango;
                if(tango) { _fun55225_ip = 133; continue _fun55225 }
 75:
                tango = _closure1_slot22;
                golf = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[options];
                zulu = golf.bind(report)(zulu);
                zulu = zulu.NotificationCenterLocalItems;
                zulu = zulu.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                mike = _closure2_slot0;
                mike = mike.relationship;
                mike = mike.id;
                mike = tango.bind(report)(oscar, zulu, mike);
                entity = !mike;
 133:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity);
        mike['notifCenterLocalItems'] = entity;
        entity = undefined;
        return entity;
    };
    mike['RELATIONSHIP_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleGameRelationshipAddOrUpdate
        _fun55226: for(var _fun55226_ip = 0; ; ) switch(_fun55226_ip) {
 0:
            entity = argFoo;
            entity = entity.gameRelationship;
            verify = undefined;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = verify;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 13;
            tango = oscar[tango];
            oscar = report.bind(verify)(tango);
            report = oscar.getIsFriendTiersUIEnabled;
            tango = {};
            golf = 'NotificationCenterItemsStore';
            tango['location'] = golf;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun55226_ip = 74; continue _fun55226 }
 70:
            tango = false;
            return tango;
 74:
            oscar = entity.id;
            _closure2_slot0 = oscar;
            tango = entity.type;
            options = entity.since;
            golf = entity.applicationId;
            _closure2_slot1 = golf;
            report = _closure1_slot11;
            entity = report.isBlockedOrIgnored;
            entity = entity.bind(report)(oscar);
            if(entity) { _fun55226_ip = 293; continue _fun55226 }
 124:
            entity = _closure1_slot13;
            entity = entity.PENDING_INCOMING;
            if(!(tango === entity)) { _fun55226_ip = 163; continue _fun55226 }
 138:
            report = _closure1_slot12;
            entity = report.getUser;
            oscar = entity.bind(report)(oscar);
            entity = null;
            if(!(entity != options)) { _fun55226_ip = 163; continue _fun55226 }
 159:
            if(!(entity == oscar)) { _fun55226_ip = 215; continue _fun55226 }
 163:
            entity = _closure1_slot13;
            entity = entity.FRIEND;
            entity = tango === entity;
            if(!entity) { _fun55226_ip = 213; continue _fun55226 }
 180:
            tango = _closure1_slot14;
            offset = tango.notifCenterLocalItems;
            report = offset.map;
            mike = function(argFoo) {
                _fun55227: for(var _fun55227_ip = 0; ; ) switch(_fun55227_ip) {
 0:
                    tango = argFoo;
                    verify = _closure1_slot23;
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 11;
                    entity = entity[oscar];
                    report = undefined;
                    entity = mike.bind(report)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    foxtrot = entity.INCOMING_GAME_FRIEND_REQUESTS;
                    romeo = _closure2_slot0;
                    yankee = _closure2_slot1;
                    kilo = undefined;
                    backup = tango;
                    mike = kilo[verify](backup, foxtrot, romeo, yankee, offset);
                    entity = tango;
                    if(!mike) { _fun55227_ip = 196; continue _fun55227 }
 73:
                    mike = {};
                    backup = mike;
                    foxtrot = tango;
                    options = copyDataProperties(backup, foxtrot);
                    verify = true;
                    options = 'acked';
                    mike[options] = verify;
                    verify = false;
                    options = 'forceUnacked';
                    mike[options] = verify;
                    offset = _closure2_slot0;
                    verify = tango.id;
                    tango = global;
                    tango = tango.HermesInternal;
                    options = tango.concat;
                    golf = 'incoming_game_friend_requests_accepted_';
                    tango = '_';
                    golf = options.bind(golf)(offset, tango, verify);
                    tango = 'local_id';
                    mike[tango] = golf;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    zulu = tango.bind(report)(zulu);
                    zulu = zulu.NotificationCenterLocalItems;
                    tango = zulu.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    zulu = 'type';
                    mike[zulu] = tango;
                    entity = mike;
 196:
                    return entity;
                }
            };
            mike = report.bind(offset)(mike);
            tango['notifCenterLocalItems'] = mike;
            entity = true;
 213:
            return entity;
 215:
            mike = _closure1_slot14;
            romeo = mike.notifCenterLocalItems;
            entity = new Array(1);
            yankee = 0;
            foxtrot = entity;
            tango = arraySpread(foxtrot, romeo, yankee);
            report = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 15;
            zulu = offset[zulu];
            report = report.bind(verify)(zulu);
            zulu = report.incomingGameFriendRequestLocalItem;
            zulu = zulu.bind(report)(oscar, options, golf);
            entity[tango] = zulu;
            zulu = 1;
            zulu = tango + zulu;
            mike['notifCenterLocalItems'] = entity;
            entity = true;
            return entity;
 293:
            entity = false;
            return entity;
        }
    };
    mike['GAME_RELATIONSHIP_ADD'] = verify;
    verify = function(argFoo) { // Original name: handleGameRelationshipRemove
        _fun55228: for(var _fun55228_ip = 0; ; ) switch(_fun55228_ip) {
 0:
            entity = argFoo;
            zulu = entity.userId;
            var _closure2_slot0 = zulu;
            entity = entity.applicationId;
            var _closure2_slot1 = entity;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 13;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.getIsFriendTiersUIEnabled;
            tango = {};
            golf = 'NotificationCenterItemsStore';
            tango['location'] = golf;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun55228_ip = 78; continue _fun55228 }
 74:
            tango = false;
            return tango;
 78:
            zulu = _closure1_slot14;
            report = zulu.notifCenterLocalItems;
            tango = report.filter;
            mike = function(argFoo) {
                _fun55229: for(var _fun55229_ip = 0; ; ) switch(_fun55229_ip) {
 0:
                    golf = argFoo;
                    verify = _closure1_slot23;
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    options = 11;
                    entity = entity[options];
                    oscar = undefined;
                    entity = mike.bind(oscar)(entity);
                    entity = entity.NotificationCenterLocalItems;
                    romeo = entity.INCOMING_GAME_FRIEND_REQUESTS;
                    yankee = _closure2_slot0;
                    offset = _closure2_slot1;
                    backup = undefined;
                    foxtrot = golf;
                    tango = backup[verify](foxtrot, romeo, yankee, offset, verify);
                    entity = !tango;
                    if(tango) { _fun55229_ip = 123; continue _fun55229 }
 70:
                    report = _closure1_slot23;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[options];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.NotificationCenterLocalItems;
                    romeo = zulu.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    yankee = _closure2_slot0;
                    offset = _closure2_slot1;
                    backup = undefined;
                    foxtrot = golf;
                    mike = backup[report](foxtrot, romeo, yankee, offset, verify);
                    entity = !mike;
 123:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            zulu['notifCenterLocalItems'] = mike;
            return entity;
        }
    };
    mike['GAME_RELATIONSHIP_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleCompleted
        entity = argFoo;
        entity = entity.item_enum;
        var _closure2_slot0 = entity;
        mike = _closure1_slot14;
        report = mike.notifCenterItems;
        tango = report.map;
        zulu = function(argFoo) {
            _fun55231: for(var _fun55231_ip = 0; ; ) switch(_fun55231_ip) {
 0:
                zulu = argFoo;
                tango = zulu.item_enum;
                mike = _closure2_slot0;
                entity = zulu;
                if(!(tango === mike)) { _fun55231_ip = 58; continue _fun55231 }
 23:
                mike = {};
                oscar = mike;
                report = zulu;
                zulu = copyDataProperties(oscar, report);
                tango = true;
                zulu = 'completed';
                mike[zulu] = tango;
                zulu = 'acked';
                mike[zulu] = tango;
                entity = mike;
 58:
                return entity;
            }
        };
        tango = tango.bind(report)(zulu);
        zulu = tango.filter;
        entity = _closure1_slot17;
        entity = zulu.bind(tango)(entity);
        mike['notifCenterItems'] = entity;
        entity = undefined;
        return entity;
    };
    mike['NOTIFICATION_CENTER_ITEM_COMPLETED'] = verify;
    verify = function() { // Original name: SET_RECENT_MENTIONS_FILTER
        mike = _closure1_slot19;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['SET_RECENT_MENTIONS_FILTER'] = verify;
    tango = function(argFoo) { // Original name: handleMobileNativeUpdate
        _fun55233: for(var _fun55233_ip = 0; ; ) switch(_fun55233_ip) {
 0:
            entity = argFoo;
            oscar = entity.newBuild;
            entity = undefined;
            var _closure2_slot0 = entity;
            zulu = null;
            if(!(zulu !== oscar)) { _fun55233_ip = 149; continue _fun55233 }
 26:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 15;
            tango = golf[tango];
            report = report.bind(entity)(tango);
            tango = report.mobileNativeUpdateAvailableLocalItem;
            tango = tango.bind(report)(oscar);
            _closure2_slot0 = tango;
            report = _closure1_slot14;
            golf = report.notifCenterLocalItems;
            oscar = golf.find;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.local_id;
                entity = _closure2_slot0;
                entity = entity.local_id;
                entity = mike === entity;
                return entity;
            };
            report = oscar.bind(golf)(report);
            if(!(entity === report)) { _fun55233_ip = 149; continue _fun55233 }
 93:
            zulu = _closure1_slot14;
            oscar = zulu.notifCenterLocalItems;
            report = oscar.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.kind;
                entity = _closure2_slot0;
                entity = entity.kind;
                entity = mike !== entity;
                return entity;
            };
            verify = report.bind(oscar)(mike);
            mike = new Array(1);
            options = 0;
            offset = mike;
            report = arraySpread(offset, verify, options);
            mike[report] = tango;
            tango = 1;
            tango = report + tango;
            zulu['notifCenterLocalItems'] = mike;
 149:
            return entity;
        }
    };
    mike['MOBILE_NATIVE_UPDATE_CHECK_FINISHED'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    output = tango;
    kilo = mike;
    mike = new output[options](sizing, kilo, backup);
    mike = mike instanceof Object ? mike : tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notification_center/NotificationCenterItemsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();