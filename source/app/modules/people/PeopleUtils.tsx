// app/modules/people/PeopleUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    golfie = function(argFoo) { // Original name: acceptFriendRequest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.userId;
            report = entity.applicationId;
            golfie = entity.location;
            tangon = entity.friendToken;
            entity = null;
            if(!(entity == report)) { _fun00002_ip = 89; continue _fun00001 }
 30:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.acceptFriendRequest;
            entity = {};
            entity['userId'] = oscard;
            entity['friendToken'] = tangon;
            tangon = {};
            tangon['location'] = golfie;
            entity['context'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 135; continue _fun00001;
 89:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.acceptGameFriendRequest;
            michal = {};
            michal['userId'] = oscard;
            michal['applicationId'] = report;
            entity = zuuluu.bind(tangon)(michal);
 135:
            return entity;
        }
    };
    var _closure1_slot4 = golfie;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = {};
    option = function(argFoo) { // Original name: removeFriend
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.userId;
            tangon = entity.applicationId;
            oscard = entity.location;
            entity = null;
            if(!(entity == tangon)) { _fun00004_ip = 69; continue _fun00003 }
 24:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.removeFriend;
            entity = {};
            entity['location'] = oscard;
            entity = michal.bind(zuuluu)(report, entity);
            _fun00004_ip = 115; continue _fun00003;
 69:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.removeGameFriend;
            entity = {};
            entity['userId'] = report;
            entity['applicationId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 115:
            entity = undefined;
            return entity;
        }
    };
    michal['removeFriend'] = option;
    option = function(argFoo) { // Original name: cancelFriendRequest
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.userId;
            report = entity.applicationId;
            tangon = entity.location;
            entity = null;
            if(!(entity == report)) { _fun00006_ip = 69; continue _fun00005 }
 24:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.cancelFriendRequest;
            entity = {};
            entity['location'] = tangon;
            entity = michal.bind(zuuluu)(oscard, entity);
            _fun00006_ip = 115; continue _fun00005;
 69:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.cancelGameFriendRequest;
            michal = {};
            michal['userId'] = oscard;
            michal['applicationId'] = report;
            entity = zuuluu.bind(tangon)(michal);
 115:
            return entity;
        }
    };
    michal['cancelFriendRequest'] = option;
    michal['acceptFriendRequest'] = golfie;
    tangon = function(argFoo) { // Original name: maybeConfirmFriendRequestAccept
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = entity.userId;
            var _closure2_slot0 = golfie;
            oscard = entity.applicationId;
            var _closure2_slot1 = oscard;
            report = entity.location;
            var _closure2_slot2 = report;
            tangon = entity.friendToken;
            var _closure2_slot3 = tangon;
            michal = entity.onConfirm;
            var _closure2_slot4 = michal;
            offset = entity.onCancel;
            zuuluu = _closure1_slot3;
            michal = zuuluu.isStrangerRequest;
            option = michal.bind(zuuluu)(golfie);
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            michal = zuuluu[michal];
            zuuluu = undefined;
            romeon = verify.bind(zuuluu)(michal);
            verify = romeon.isEligibleForFriendRequestAlerts;
            michal = 'useFriendRequestActions';
            michal = verify.bind(romeon)(michal);
            verify = null;
            if(!(verify == oscard)) { _fun00008_ip = 175; continue _fun00007 }
 119:
            if(!option) { _fun00008_ip = 175; continue _fun00007 }
 122:
            if(!michal) { _fun00008_ip = 175; continue _fun00007 }
 125:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 4;
            michal = verify[michal];
            verify = option.bind(zuuluu)(michal);
            option = verify.openAcceptFriendRequestConfirmModal;
            michal = {};
            yankee = function() { // Original name: onConfirm
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot4;
                    zuuluu = {};
                    entity = _closure2_slot0;
                    zuuluu['userId'] = entity;
                    entity = _closure2_slot1;
                    zuuluu['applicationId'] = entity;
                    entity = _closure2_slot2;
                    zuuluu['location'] = entity;
                    entity = _closure2_slot3;
                    zuuluu['friendToken'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot4;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00010_ip = 70; continue _fun00009 }
 62:
                    michal = _closure2_slot4;
                    michal = michal.bind(entity)();
 70:
                    return entity;
                }
            };
            michal['onConfirm'] = yankee;
            michal['onCancel'] = offset;
            michal = option.bind(verify)(michal);
            return zuuluu;
 175:
            michal = _closure1_slot4;
            entity = {};
            entity['userId'] = golfie;
            entity['applicationId'] = oscard;
            entity['location'] = report;
            entity['friendToken'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['maybeConfirmFriendRequestAccept'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/people/PeopleUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();