// app/stores/InviteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun54456: for(var _fun54456_ip = 0; ; ) switch(_fun54456_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun54456_ip = 51; continue _fun54456 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun54456_ip = 92; continue _fun54456;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun54456_ip = 71; continue _fun54456 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun54457: for(var _fun54457_ip = 0; ; ) switch(_fun54457_ip) {
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
            _fun54457_ip = 74; continue _fun54457;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: updateInvite
        _fun54460: for(var _fun54460_ip = 0; ; ) switch(_fun54460_ip) {
 0:
            entity = argFoo;
            oscar = null;
            zulu = oscar != entity;
            mike = '';
            if(!zulu) { _fun54460_ip = 19; continue _fun54460 }
 16:
            mike = entity;
 19:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 6;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.parseExtraDataFromInviteKey;
            tango = tango.bind(report)(mike);
            golf = _closure1_slot8;
            report = golf.get;
            golf = report.bind(golf)(mike);
            report = mike;
            if(!(oscar == golf)) { _fun54460_ip = 104; continue _fun54460 }
 76:
            mike = {};
            options = _closure1_slot7;
            options = options.RESOLVING;
            mike['state'] = options;
            tango = tango.baseCode;
            mike['code'] = tango;
            _fun54460_ip = 133; continue _fun54460;
 104:
            tango = {};
            options = _closure1_slot7;
            options = options.RESOLVING;
            tango['state'] = options;
            offset = tango;
            verify = golf;
            golf = copyDataProperties(offset, verify);
            mike = tango;
 133:
            tango = argBar;
            tango = tango.bind(entity)(mike);
            tango = global;
            options = tango.Map;
            offset = _closure1_slot8;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            yankee = golf;
            tango = new yankee[options](offset, verify);
            golf = tango instanceof Object ? tango : golf;
            _closure1_slot8 = golf;
            tango = golf.set;
            tango = tango.bind(golf)(report, mike);
            golf = mike.guild;
            options = oscar == golf;
            tango = mike;
            mike = undefined;
            if(options) { _fun54460_ip = 210; continue _fun54460 }
 205:
            mike = golf.id;
 210:
            if(!(oscar != mike)) { _fun54460_ip = 246; continue _fun54460 }
 214:
            mike = {};
            verify = _closure1_slot10;
            offset = mike;
            oscar = copyDataProperties(offset, verify);
            tango = tango.guild;
            tango = tango.id;
            mike[tango] = report;
            _closure1_slot10 = mike;
 246:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    verify = function(argFoo) { // Original name: handleInviteResolveFailure
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot13;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            _fun54462: for(var _fun54462_ip = 0; ; ) switch(_fun54462_ip) {
 0:
                zulu = _closure2_slot0;
                mike = 'banned';
                mike = mike in zulu;
                if(!mike) { _fun54462_ip = 31; continue _fun54462 }
 18:
                entity = _closure2_slot0;
                entity = entity.banned;
                if(entity) { _fun54462_ip = 46; continue _fun54462 }
 31:
                entity = _closure1_slot7;
                mike = entity.EXPIRED;
                _fun54462_ip = 59; continue _fun54462;
 46:
                entity = _closure1_slot7;
                mike = entity.BANNED;
 59:
                entity = argFoo;
                entity['state'] = mike;
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.InviteStates;
    var _closure1_slot7 = options;
    options = mike.Map;
    offset = options.prototype;
    offset = Object.create(offset, {constructor: {value: options}});
    kilo = offset;
    options = new kilo[options](backup);
    options = options instanceof Object ? options : offset;
    var _closure1_slot8 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    kilo = options;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot9 = mike;
    mike = {};
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: InviteStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'getInvite';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zulu = _closure1_slot8;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getInviteError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot9;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getInvites';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getInviteKeyForGuildId';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot10;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'InviteStore';
    options['displayName'] = mike;
    mike = 8;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: handleInviteResolve
        entity = argFoo;
        report = entity.code;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.parseExtraDataFromInviteKey;
        golf = mike.bind(zulu)(report);
        mike = global;
        tango = mike.Map;
        verify = _closure1_slot8;
        zulu = tango.prototype;
        zulu = Object.create(zulu, {constructor: {value: tango}});
        offset = zulu;
        mike = new offset[tango](verify, options);
        tango = mike instanceof Object ? mike : zulu;
        _closure1_slot8 = tango;
        zulu = tango.set;
        mike = {};
        golf = golf.baseCode;
        mike['code'] = golf;
        oscar = _closure1_slot7;
        oscar = oscar.RESOLVING;
        mike['state'] = oscar;
        mike = zulu.bind(tango)(report, mike);
        return entity;
    };
    mike['INVITE_RESOLVE'] = offset;
    offset = function(argFoo) { // Original name: handleInviteResolveSuccess
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot13;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            _fun54471: for(var _fun54471_ip = 0; ; ) switch(_fun54471_ip) {
 0:
                mike = argFoo;
                entity = _closure1_slot7;
                entity = entity.RESOLVED;
                mike['state'] = entity;
                zulu = _closure2_slot0;
                tango = zulu.invite;
                tango = tango.guild;
                mike['guild'] = tango;
                tango = zulu.invite;
                tango = tango.channel;
                mike['channel'] = tango;
                tango = zulu.invite;
                tango = tango.inviter;
                mike['inviter'] = tango;
                zulu = zulu.invite;
                report = zulu.approximate_member_count;
                zulu = null;
                oscar = zulu != report;
                tango = null;
                if(!oscar) { _fun54471_ip = 107; continue _fun54471 }
 104:
                tango = report;
 107:
                mike['approximate_member_count'] = tango;
                tango = _closure2_slot0;
                tango = tango.invite;
                tango = tango.approximate_presence_count;
                report = zulu != tango;
                zulu = null;
                if(!report) { _fun54471_ip = 141; continue _fun54471 }
 138:
                zulu = tango;
 141:
                mike['approximate_presence_count'] = zulu;
                entity = _closure2_slot0;
                zulu = entity.invite;
                zulu = zulu.target_type;
                mike['target_type'] = zulu;
                zulu = entity.invite;
                zulu = zulu.target_user;
                mike['target_user'] = zulu;
                zulu = entity.invite;
                zulu = zulu.target_application;
                mike['target_application'] = zulu;
                zulu = entity.invite;
                zulu = zulu.expires_at;
                mike['expires_at'] = zulu;
                zulu = entity.invite;
                zulu = zulu.stage_instance;
                mike['stage_instance'] = zulu;
                zulu = entity.invite;
                zulu = zulu.friends_count;
                mike['friends_count'] = zulu;
                zulu = entity.invite;
                zulu = zulu.is_contact;
                mike['is_contact'] = zulu;
                zulu = entity.invite;
                zulu = zulu.guild_scheduled_event;
                mike['guild_scheduled_event'] = zulu;
                zulu = entity.invite;
                zulu = zulu.type;
                mike['type'] = zulu;
                zulu = entity.invite;
                zulu = zulu.flags;
                mike['flags'] = zulu;
                entity = entity.invite;
                entity = entity.is_nickname_changeable;
                mike['is_nickname_changeable'] = entity;
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INVITE_RESOLVE_SUCCESS'] = offset;
    mike['INVITE_RESOLVE_FAILURE'] = verify;
    mike['INSTANT_INVITE_REVOKE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleFriendInviteCreate
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot13;
        entity = entity.invite;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            mike = argFoo;
            entity = _closure1_slot7;
            entity = entity.RESOLVED;
            mike['state'] = entity;
            entity = _closure2_slot0;
            entity = entity.invite;
            entity = entity.inviter;
            mike['inviter'] = entity;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['FRIEND_INVITE_CREATE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleFriendInviteRevokeSuccess
        entity = argFoo;
        zulu = entity.invites;
        mike = zulu.forEach;
        entity = function(argFoo) {
            tango = _closure1_slot13;
            entity = argFoo;
            zulu = entity.code;
            entity = undefined;
            mike = function(argFoo) {
                entity = _closure1_slot7;
                mike = entity.EXPIRED;
                entity = argFoo;
                entity['state'] = mike;
                entity = undefined;
                return entity;
            };
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['FRIEND_INVITE_REVOKE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleInstantInviteCreate
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot13;
        entity = entity.invite;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            _fun54478: for(var _fun54478_ip = 0; ; ) switch(_fun54478_ip) {
 0:
                mike = argFoo;
                entity = _closure1_slot7;
                entity = entity.RESOLVED;
                mike['state'] = entity;
                zulu = _closure2_slot0;
                tango = zulu.invite;
                tango = tango.guild;
                mike['guild'] = tango;
                tango = zulu.invite;
                tango = tango.channel;
                mike['channel'] = tango;
                tango = zulu.invite;
                tango = tango.inviter;
                mike['inviter'] = tango;
                zulu = zulu.invite;
                report = zulu.approximate_member_count;
                zulu = null;
                oscar = zulu != report;
                tango = null;
                if(!oscar) { _fun54478_ip = 107; continue _fun54478 }
 104:
                tango = report;
 107:
                mike['approximate_member_count'] = tango;
                tango = _closure2_slot0;
                tango = tango.invite;
                tango = tango.approximate_presence_count;
                report = zulu != tango;
                zulu = null;
                if(!report) { _fun54478_ip = 141; continue _fun54478 }
 138:
                zulu = tango;
 141:
                mike['approximate_presence_count'] = zulu;
                entity = _closure2_slot0;
                zulu = entity.invite;
                zulu = zulu.target_type;
                mike['target_type'] = zulu;
                zulu = entity.invite;
                zulu = zulu.target_user;
                mike['target_user'] = zulu;
                zulu = entity.invite;
                zulu = zulu.target_application;
                mike['target_application'] = zulu;
                zulu = entity.invite;
                zulu = zulu.stage_instance;
                mike['stage_instance'] = zulu;
                zulu = entity.invite;
                zulu = zulu.guild_scheduled_event;
                mike['guild_scheduled_event'] = zulu;
                zulu = entity.invite;
                zulu = zulu.type;
                mike['type'] = zulu;
                entity = entity.invite;
                entity = entity.is_nickname_changeable;
                mike['is_nickname_changeable'] = entity;
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INSTANT_INVITE_CREATE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleAcceptInvite
        tango = _closure1_slot13;
        entity = argFoo;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.ACCEPTING;
            entity = argFoo;
            entity['state'] = mike;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INVITE_ACCEPT'] = verify;
    verify = function(argFoo) { // Original name: handleAcceptInviteSuccess
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot13;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            mike = argFoo;
            entity = _closure1_slot7;
            entity = entity.ACCEPTED;
            mike['state'] = entity;
            zulu = _closure2_slot0;
            entity = zulu.invite;
            entity = entity.guild;
            mike['guild'] = entity;
            entity = zulu.invite;
            entity = entity.new_member;
            mike['new_member'] = entity;
            entity = {};
            report = mike.channel;
            oscar = entity;
            tango = copyDataProperties(oscar, report);
            zulu = zulu.invite;
            report = zulu.channel;
            oscar = entity;
            zulu = copyDataProperties(oscar, report);
            mike['channel'] = entity;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INVITE_ACCEPT_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleAcceptInviteFailure
        entity = argFoo;
        oscar = _closure1_slot9;
        report = oscar.set;
        tango = entity.code;
        zulu = entity.error;
        zulu = report.bind(oscar)(tango, zulu);
        tango = _closure1_slot13;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.ERROR;
            entity = argFoo;
            entity['state'] = mike;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INVITE_ACCEPT_FAILURE'] = verify;
    verify = function(argFoo) { // Original name: handleInviteAppOpening
        tango = _closure1_slot13;
        entity = argFoo;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.APP_OPENING;
            entity = argFoo;
            entity['state'] = mike;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INVITE_APP_OPENING'] = verify;
    verify = function(argFoo) { // Original name: handleInviteAppOpened
        tango = _closure1_slot13;
        entity = argFoo;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.APP_OPENED;
            entity = argFoo;
            entity['state'] = mike;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INVITE_APP_OPENED'] = verify;
    tango = function(argFoo) { // Original name: handleInviteAppNotOpened
        tango = _closure1_slot13;
        entity = argFoo;
        zulu = entity.code;
        entity = undefined;
        mike = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.APP_NOT_OPENED;
            entity = argFoo;
            entity['state'] = mike;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['INVITE_APP_NOT_OPENED'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/InviteStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();