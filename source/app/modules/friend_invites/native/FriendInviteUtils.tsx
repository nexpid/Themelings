// app/modules/friend_invites/native/FriendInviteUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: handleInviteAccepted
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/friend_invites/native/FriendInviteUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 7;
    zuuluu['DEFAULT_EXPIRATION_DAYS'] = tangon;
    tangon = 5;
    zuuluu['DEFAULT_EXPIRATION_USES'] = tangon;
    tangon = function() { // Original name: revokeAllFriendInvites
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.revokeFriendInvites;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.then;
        michal = function() {
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 3;
            michal = golfie[entity];
            entity = undefined;
            tangon = oscard.bind(entity)(michal);
            zuuluu = tangon.open;
            michal = {};
            option = 'TOAST_FRIEND_INVITES_REVOKED';
            michal['key'] = option;
            offset = _closure1_slot0;
            report = 4;
            option = golfie[report];
            option = offset.bind(entity)(option);
            verify = option.intl;
            option = verify.string;
            report = golfie[report];
            report = offset.bind(entity)(report);
            report = report.t;
            report = report.jSHEOT;
            report = option.bind(verify)(report);
            michal['content'] = report;
            report = 5;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            michal['icon'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['revokeAllFriendInvites'] = tangon;
    michal = function(argFoo, argBar) { // Original name: acceptFriendInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            entity = golfie.channel;
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 219; continue _fun00001 }
 23:
            entity = golfie.guild;
            if(!(michal == entity)) { _fun00002_ip = 219; continue _fun00001 }
 35:
            entity = golfie.inviter;
            if(!(michal != entity)) { _fun00002_ip = 219; continue _fun00001 }
 48:
            report = _closure1_slot4;
            tangon = report.isFriend;
            zuuluu = golfie.inviter;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu);
            report = null;
            if(!zuuluu) { _fun00002_ip = 108; continue _fun00001 }
 82:
            option = _closure1_slot3;
            tangon = option.getDMFromUserId;
            zuuluu = golfie.inviter;
            zuuluu = zuuluu.id;
            report = tangon.bind(option)(zuuluu);
 108:
            if(!(michal == report)) { _fun00002_ip = 178; continue _fun00001 }
 112:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.acceptInviteAndTransitionToInviteChannel;
            michal = {};
            golfie = golfie.code;
            michal['inviteKey'] = golfie;
            golfie = argBar;
            michal['context'] = golfie;
            oscard = function() { // Original name: callback
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 3;
                    zuuluu = offset[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.open;
                    zuuluu = {};
                    oscard = 'FRIEND_INVITE_ACCEPT_CONFIRMATION';
                    zuuluu['key'] = oscard;
                    golfie = _closure1_slot0;
                    oscard = 4;
                    option = offset[oscard];
                    option = golfie.bind(entity)(option);
                    verify = option.intl;
                    option = verify.formatToPlainString;
                    oscard = offset[oscard];
                    oscard = golfie.bind(entity)(oscard);
                    oscard = oscard.t;
                    golfie = oscard.st2dcn;
                    oscard = {};
                    offset = _closure2_slot0;
                    yankee = offset.inviter;
                    offset = null;
                    romeon = offset == yankee;
                    offset = undefined;
                    if(romeon) { _fun00004_ip = 122; continue _fun00003 }
 117:
                    offset = yankee.username;
 122:
                    oscard['username'] = offset;
                    oscard = option.bind(verify)(golfie, oscard);
                    zuuluu['content'] = oscard;
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 5;
                    oscard = option[oscard];
                    oscard = golfie.bind(entity)(oscard);
                    zuuluu['icon'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal = _closure1_slot5;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            michal['callback'] = oscard;
            michal = zuuluu.bind(tangon)(michal);
            _fun00002_ip = 219; continue _fun00001;
 178:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.transitionToInviteChannelSync;
            zuuluu = zuuluu.bind(tangon)(report);
            entity = _closure1_slot5;
            entity = entity.bind(michal)();
 219:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['acceptFriendInvite'] = michal;
    return entity;
})();