// app/stores/InviteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: updateInvite
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = null;
            zuuluu = oscard != entity;
            michal = '';
            if(!zuuluu) { _fun00004_ip = 19; continue _fun00003 }
 16:
            michal = entity;
 19:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 6;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.parseExtraDataFromInviteKey;
            tangon = tangon.bind(report)(michal);
            golfie = _closure1_slot8;
            report = golfie.get;
            golfie = report.bind(golfie)(michal);
            report = michal;
            if(!(oscard == golfie)) { _fun00004_ip = 104; continue _fun00003 }
 76:
            michal = {};
            option = _closure1_slot7;
            option = option.RESOLVING;
            michal['state'] = option;
            tangon = tangon.baseCode;
            michal['code'] = tangon;
            _fun00004_ip = 133; continue _fun00003;
 104:
            tangon = {};
            option = _closure1_slot7;
            option = option.RESOLVING;
            tangon['state'] = option;
            offset = tangon;
            verify = golfie;
            golfie = copyDataProperties(offset, verify);
            michal = tangon;
 133:
            tangon = argBar;
            tangon = tangon.bind(entity)(michal);
            tangon = global;
            option = tangon.Map;
            offset = _closure1_slot8;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            yankee = golfie;
            tangon = new yankee[option](offset, verify);
            golfie = tangon instanceof Object ? tangon : golfie;
            _closure1_slot8 = golfie;
            tangon = golfie.set;
            tangon = tangon.bind(golfie)(report, michal);
            golfie = michal.guild;
            option = oscard == golfie;
            tangon = michal;
            michal = undefined;
            if(option) { _fun00004_ip = 210; continue _fun00003 }
 205:
            michal = golfie.id;
 210:
            if(!(oscard != michal)) { _fun00004_ip = 246; continue _fun00003 }
 214:
            michal = {};
            verify = _closure1_slot10;
            offset = michal;
            oscard = copyDataProperties(offset, verify);
            tangon = tangon.guild;
            tangon = tangon.id;
            michal[tangon] = report;
            _closure1_slot10 = michal;
 246:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    verify = function(argFoo) { // Original name: handleInviteResolveFailure
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot12;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = 'banned';
                michal = michal in zuuluu;
                if(!michal) { _fun00006_ip = 31; continue _fun00005 }
 18:
                entity = _closure2_slot0;
                entity = entity.banned;
                if(entity) { _fun00006_ip = 46; continue _fun00005 }
 31:
                entity = _closure1_slot7;
                michal = entity.EXPIRED;
                _fun00006_ip = 59; continue _fun00005;
 46:
                entity = _closure1_slot7;
                michal = entity.BANNED;
 59:
                entity = argFoo;
                entity['state'] = michal;
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.InviteStates;
    var _closure1_slot7 = option;
    option = michal.Map;
    offset = option.prototype;
    offset = Object.create(offset, {constructor: {value: option}});
    kiloes = offset;
    option = new kiloes[option](backup);
    option = option instanceof Object ? option : offset;
    var _closure1_slot8 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    kiloes = option;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot9 = michal;
    michal = {};
    var _closure1_slot10 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: InviteStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot11;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'getInvite';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot8;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getInviteError';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot9;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getInvites';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getInviteKeyForGuildId';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = _closure1_slot10;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'InviteStore';
    option['displayName'] = michal;
    michal = 8;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleInviteResolve
        entity = argFoo;
        report = entity.code;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.parseExtraDataFromInviteKey;
        golfie = michal.bind(zuuluu)(report);
        michal = global;
        tangon = michal.Map;
        verify = _closure1_slot8;
        zuuluu = tangon.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
        offset = zuuluu;
        michal = new offset[tangon](verify, option);
        tangon = michal instanceof Object ? michal : zuuluu;
        _closure1_slot8 = tangon;
        zuuluu = tangon.set;
        michal = {};
        golfie = golfie.baseCode;
        michal['code'] = golfie;
        oscard = _closure1_slot7;
        oscard = oscard.RESOLVING;
        michal['state'] = oscard;
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    michal['INVITE_RESOLVE'] = offset;
    offset = function(argFoo) { // Original name: handleInviteResolveSuccess
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot12;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                entity = _closure1_slot7;
                entity = entity.RESOLVED;
                michal['state'] = entity;
                zuuluu = _closure2_slot0;
                tangon = zuuluu.invite;
                tangon = tangon.guild;
                michal['guild'] = tangon;
                tangon = zuuluu.invite;
                tangon = tangon.channel;
                michal['channel'] = tangon;
                tangon = zuuluu.invite;
                tangon = tangon.inviter;
                michal['inviter'] = tangon;
                zuuluu = zuuluu.invite;
                report = zuuluu.approximate_member_count;
                zuuluu = null;
                oscard = zuuluu != report;
                tangon = null;
                if(!oscard) { _fun00010_ip = 107; continue _fun00009 }
 104:
                tangon = report;
 107:
                michal['approximate_member_count'] = tangon;
                tangon = _closure2_slot0;
                tangon = tangon.invite;
                tangon = tangon.approximate_presence_count;
                report = zuuluu != tangon;
                zuuluu = null;
                if(!report) { _fun00010_ip = 141; continue _fun00009 }
 138:
                zuuluu = tangon;
 141:
                michal['approximate_presence_count'] = zuuluu;
                entity = _closure2_slot0;
                zuuluu = entity.invite;
                zuuluu = zuuluu.target_type;
                michal['target_type'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.target_user;
                michal['target_user'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.target_application;
                michal['target_application'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.expires_at;
                michal['expires_at'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.stage_instance;
                michal['stage_instance'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.friends_count;
                michal['friends_count'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.is_contact;
                michal['is_contact'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.guild_scheduled_event;
                michal['guild_scheduled_event'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.type;
                michal['type'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.flags;
                michal['flags'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.is_nickname_changeable;
                michal['is_nickname_changeable'] = zuuluu;
                entity = entity.invite;
                entity = entity.profile;
                michal['profile'] = entity;
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INVITE_RESOLVE_SUCCESS'] = offset;
    michal['INVITE_RESOLVE_FAILURE'] = verify;
    michal['INSTANT_INVITE_REVOKE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleFriendInviteCreate
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot12;
        entity = entity.invite;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            michal = argFoo;
            entity = _closure1_slot7;
            entity = entity.RESOLVED;
            michal['state'] = entity;
            entity = _closure2_slot0;
            entity = entity.invite;
            entity = entity.inviter;
            michal['inviter'] = entity;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['FRIEND_INVITE_CREATE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleFriendInviteRevokeSuccess
        entity = argFoo;
        zuuluu = entity.invites;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            tangon = _closure1_slot12;
            entity = argFoo;
            zuuluu = entity.code;
            entity = undefined;
            michal = function(argFoo) {
                entity = _closure1_slot7;
                michal = entity.EXPIRED;
                entity = argFoo;
                entity['state'] = michal;
                entity = undefined;
                return entity;
            };
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['FRIEND_INVITE_REVOKE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleInstantInviteCreate
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot12;
        entity = entity.invite;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                entity = _closure1_slot7;
                entity = entity.RESOLVED;
                michal['state'] = entity;
                zuuluu = _closure2_slot0;
                tangon = zuuluu.invite;
                tangon = tangon.guild;
                michal['guild'] = tangon;
                tangon = zuuluu.invite;
                tangon = tangon.channel;
                michal['channel'] = tangon;
                tangon = zuuluu.invite;
                tangon = tangon.inviter;
                michal['inviter'] = tangon;
                zuuluu = zuuluu.invite;
                report = zuuluu.approximate_member_count;
                zuuluu = null;
                oscard = zuuluu != report;
                tangon = null;
                if(!oscard) { _fun00012_ip = 107; continue _fun00011 }
 104:
                tangon = report;
 107:
                michal['approximate_member_count'] = tangon;
                tangon = _closure2_slot0;
                tangon = tangon.invite;
                tangon = tangon.approximate_presence_count;
                report = zuuluu != tangon;
                zuuluu = null;
                if(!report) { _fun00012_ip = 141; continue _fun00011 }
 138:
                zuuluu = tangon;
 141:
                michal['approximate_presence_count'] = zuuluu;
                entity = _closure2_slot0;
                zuuluu = entity.invite;
                zuuluu = zuuluu.target_type;
                michal['target_type'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.target_user;
                michal['target_user'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.target_application;
                michal['target_application'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.stage_instance;
                michal['stage_instance'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.guild_scheduled_event;
                michal['guild_scheduled_event'] = zuuluu;
                zuuluu = entity.invite;
                zuuluu = zuuluu.type;
                michal['type'] = zuuluu;
                entity = entity.invite;
                entity = entity.is_nickname_changeable;
                michal['is_nickname_changeable'] = entity;
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INSTANT_INVITE_CREATE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleAcceptInvite
        tangon = _closure1_slot12;
        entity = argFoo;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            entity = _closure1_slot7;
            michal = entity.ACCEPTING;
            entity = argFoo;
            entity['state'] = michal;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INVITE_ACCEPT'] = verify;
    verify = function(argFoo) { // Original name: handleAcceptInviteSuccess
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot12;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            michal = argFoo;
            entity = _closure1_slot7;
            entity = entity.ACCEPTED;
            michal['state'] = entity;
            zuuluu = _closure2_slot0;
            entity = zuuluu.invite;
            entity = entity.guild;
            michal['guild'] = entity;
            entity = zuuluu.invite;
            entity = entity.new_member;
            michal['new_member'] = entity;
            entity = {};
            report = michal.channel;
            oscard = entity;
            tangon = copyDataProperties(oscard, report);
            zuuluu = zuuluu.invite;
            report = zuuluu.channel;
            oscard = entity;
            zuuluu = copyDataProperties(oscard, report);
            michal['channel'] = entity;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INVITE_ACCEPT_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleAcceptInviteFailure
        entity = argFoo;
        oscard = _closure1_slot9;
        report = oscard.set;
        tangon = entity.code;
        zuuluu = entity.error;
        zuuluu = report.bind(oscard)(tangon, zuuluu);
        tangon = _closure1_slot12;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            entity = _closure1_slot7;
            michal = entity.ERROR;
            entity = argFoo;
            entity['state'] = michal;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INVITE_ACCEPT_FAILURE'] = verify;
    verify = function(argFoo) { // Original name: handleInviteAppOpening
        tangon = _closure1_slot12;
        entity = argFoo;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            entity = _closure1_slot7;
            michal = entity.APP_OPENING;
            entity = argFoo;
            entity['state'] = michal;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INVITE_APP_OPENING'] = verify;
    verify = function(argFoo) { // Original name: handleInviteAppOpened
        tangon = _closure1_slot12;
        entity = argFoo;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            entity = _closure1_slot7;
            michal = entity.APP_OPENED;
            entity = argFoo;
            entity['state'] = michal;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INVITE_APP_OPENED'] = verify;
    tangon = function(argFoo) { // Original name: handleInviteAppNotOpened
        tangon = _closure1_slot12;
        entity = argFoo;
        zuuluu = entity.code;
        entity = undefined;
        michal = function(argFoo) {
            entity = _closure1_slot7;
            michal = entity.APP_NOT_OPENED;
            entity = argFoo;
            entity['state'] = michal;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['INVITE_APP_NOT_OPENED'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/InviteStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();