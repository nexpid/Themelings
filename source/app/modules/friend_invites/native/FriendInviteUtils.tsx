// app/modules/friend_invites/native/FriendInviteUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: handleInviteAccepted
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            entity = mike[entity];
            mike = undefined;
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/friend_invites/native/FriendInviteUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = 7;
    zulu['DEFAULT_EXPIRATION_DAYS'] = tango;
    tango = 5;
    zulu['DEFAULT_EXPIRATION_USES'] = tango;
    tango = function() { // Original name: revokeAllFriendInvites
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.revokeFriendInvites;
        tango = mike.bind(zulu)();
        zulu = tango.then;
        mike = function() {
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 3;
            mike = golf[entity];
            entity = undefined;
            tango = oscar.bind(entity)(mike);
            zulu = tango.open;
            mike = {};
            options = 'TOAST_FRIEND_INVITES_REVOKED';
            mike['key'] = options;
            offset = _closure1_slot0;
            report = 4;
            options = golf[report];
            options = offset.bind(entity)(options);
            verify = options.intl;
            options = verify.string;
            report = golf[report];
            report = offset.bind(entity)(report);
            report = report.t;
            report = report.jSHEOT;
            report = options.bind(verify)(report);
            mike['content'] = report;
            report = 5;
            report = golf[report];
            report = oscar.bind(entity)(report);
            mike['icon'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['revokeAllFriendInvites'] = tango;
    mike = function(argFoo, argBar) { // Original name: acceptFriendInvite
        _fun123004: for(var _fun123004_ip = 0; ; ) switch(_fun123004_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            entity = golf.channel;
            mike = null;
            if(!(mike == entity)) { _fun123004_ip = 219; continue _fun123004 }
 23:
            entity = golf.guild;
            if(!(mike == entity)) { _fun123004_ip = 219; continue _fun123004 }
 35:
            entity = golf.inviter;
            if(!(mike != entity)) { _fun123004_ip = 219; continue _fun123004 }
 48:
            report = _closure1_slot4;
            tango = report.isFriend;
            zulu = golf.inviter;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            report = null;
            if(!zulu) { _fun123004_ip = 108; continue _fun123004 }
 82:
            options = _closure1_slot3;
            tango = options.getDMFromUserId;
            zulu = golf.inviter;
            zulu = zulu.id;
            report = tango.bind(options)(zulu);
 108:
            if(!(mike == report)) { _fun123004_ip = 178; continue _fun123004 }
 112:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.acceptInviteAndTransitionToInviteChannel;
            mike = {};
            golf = golf.code;
            mike['inviteKey'] = golf;
            golf = argBar;
            mike['context'] = golf;
            oscar = function() { // Original name: callback
                _fun123005: for(var _fun123005_ip = 0; ; ) switch(_fun123005_ip) {
 0:
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 3;
                    zulu = offset[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.open;
                    zulu = {};
                    oscar = 'FRIEND_INVITE_ACCEPT_CONFIRMATION';
                    zulu['key'] = oscar;
                    golf = _closure1_slot0;
                    oscar = 4;
                    options = offset[oscar];
                    options = golf.bind(entity)(options);
                    verify = options.intl;
                    options = verify.formatToPlainString;
                    oscar = offset[oscar];
                    oscar = golf.bind(entity)(oscar);
                    oscar = oscar.t;
                    golf = oscar.st2dcn;
                    oscar = {};
                    offset = _closure2_slot0;
                    yankee = offset.inviter;
                    offset = null;
                    romeo = offset == yankee;
                    offset = undefined;
                    if(romeo) { _fun123005_ip = 120; continue _fun123005 }
 115:
                    offset = yankee.username;
 120:
                    oscar['username'] = offset;
                    oscar = options.bind(verify)(golf, oscar);
                    zulu['content'] = oscar;
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 5;
                    oscar = options[oscar];
                    oscar = golf.bind(entity)(oscar);
                    zulu['icon'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    mike = _closure1_slot5;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            mike['callback'] = oscar;
            mike = zulu.bind(tango)(mike);
            _fun123004_ip = 219; continue _fun123004;
 178:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.transitionToInviteChannelSync;
            zulu = zulu.bind(tango)(report);
            entity = _closure1_slot5;
            entity = entity.bind(mike)();
 219:
            entity = undefined;
            return entity;
        }
    };
    zulu['acceptFriendInvite'] = mike;
    return entity;
})();