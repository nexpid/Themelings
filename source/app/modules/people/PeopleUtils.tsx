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
            option = entity.location;
            golfie = entity.confirmStrangerRequest;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00002_ip = 32; continue _fun00001 }
 30:
            golfie = false;
 32:
            entity = null;
            if(!(entity == report)) { _fun00002_ip = 95; continue _fun00001 }
 38:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 3;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.acceptFriendRequest;
            entity = {};
            entity['userId'] = oscard;
            entity['confirmStrangerRequest'] = golfie;
            golfie = {};
            golfie['location'] = option;
            entity['context'] = golfie;
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 139; continue _fun00001;
 95:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.acceptGameFriendRequest;
            michal = {};
            michal['userId'] = oscard;
            michal['applicationId'] = report;
            entity = zuuluu.bind(tangon)(michal);
 139:
            return entity;
        }
    };
    var _closure1_slot5 = golfie;
    entity = function(argFoo, argBar) { // Original name: handleFriendRequestAcceptError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            zuuluu = entity.body;
            tangon = null;
            tangon = tangon == zuuluu;
            report = undefined;
            golfie = undefined;
            if(tangon) { _fun00004_ip = 35; continue _fun00003 }
 30:
            golfie = zuuluu.code;
 35:
            tangon = _closure1_slot4;
            tangon = tangon.RELATIONSHIP_INVALID_NO_CONFIRMATION;
            if(!(golfie !== tangon)) { _fun00004_ip = 125; continue _fun00003 }
 52:
            golfie = entity.ok;
            entity = false;
            if(!golfie) { _fun00004_ip = 231; continue _fun00003 }
 66:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 6;
            golfie = verify[golfie];
            verify = option.bind(report)(golfie);
            option = verify.dispatch;
            golfie = {'type': 'UPDATE_STRANGER_STATUS', 'userId': null, 'isStranger': false};
            offset = michal.userId;
            golfie['userId'] = offset;
            golfie = option.bind(verify)(golfie);
            entity = false;
            _fun00004_ip = 231; continue _fun00003;
 125:
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 6;
            tangon = golfie[tangon];
            verify = option.bind(report)(tangon);
            option = verify.dispatch;
            tangon = {'type': 'UPDATE_STRANGER_STATUS', 'userId': null, 'isStranger': true};
            michal = michal.userId;
            tangon['userId'] = michal;
            entity = true;
            tangon = option.bind(verify)(tangon);
            tangon = _closure1_slot0;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.openAcceptFriendRequestConfirmModal;
            zuuluu = {};
            golfie = function() { // Original name: onConfirm
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot5;
                    tangon = {};
                    zuuluu = _closure2_slot0;
                    option = tangon;
                    golfie = zuuluu;
                    entity = copyDataProperties(option, golfie);
                    oscard = true;
                    entity = 'confirmStrangerRequest';
                    tangon[entity] = oscard;
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    tangon = zuuluu.onConfirm;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00006_ip = 70; continue _fun00005 }
 56:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.onConfirm;
                    michal = michal.bind(zuuluu)();
 70:
                    return entity;
                }
            };
            zuuluu['onConfirm'] = golfie;
            oscard = function() { // Original name: onCancel
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.onCancel;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 33; continue _fun00007 }
 19:
                    michal = _closure2_slot0;
                    entity = michal.onCancel;
                    entity = entity.bind(michal)();
 33:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['onCancel'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
 231:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AbortCodes;
    var _closure1_slot4 = michal;
    michal = {};
    option = function(argFoo) { // Original name: removeFriend
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            report = entity.userId;
            tangon = entity.applicationId;
            oscard = entity.location;
            entity = null;
            if(!(entity == tangon)) { _fun00010_ip = 69; continue _fun00009 }
 24:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.removeFriend;
            entity = {};
            entity['location'] = oscard;
            entity = michal.bind(zuuluu)(report, entity);
            _fun00010_ip = 115; continue _fun00009;
 69:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
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
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscard = entity.userId;
            report = entity.applicationId;
            tangon = entity.location;
            entity = null;
            if(!(entity == report)) { _fun00012_ip = 69; continue _fun00011 }
 24:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.cancelFriendRequest;
            entity = {};
            entity['location'] = tangon;
            entity = michal.bind(zuuluu)(oscard, entity);
            _fun00012_ip = 115; continue _fun00011;
 69:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 2;
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
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            golfie = michal.userId;
            var _closure2_slot0 = golfie;
            oscard = michal.applicationId;
            var _closure2_slot1 = oscard;
            report = michal.location;
            var _closure2_slot2 = report;
            zuuluu = michal.onConfirm;
            var _closure2_slot3 = zuuluu;
            michal = michal.onCancel;
            var _closure2_slot4 = michal;
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 4;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            verify = option.bind(tangon)(zuuluu);
            option = verify.isEligibleForFriendRequestAlerts;
            zuuluu = 'useFriendRequestActions';
            zuuluu = option.bind(verify)(zuuluu);
            verify = _closure1_slot3;
            option = verify.isStranger;
            option = option.bind(verify)(golfie);
            verify = null;
            if(!(verify == oscard)) { _fun00014_ip = 248; continue _fun00013 }
 116:
            if(!zuuluu) { _fun00014_ip = 248; continue _fun00013 }
 122:
            verify = false;
            if(!(verify !== option)) { _fun00014_ip = 248; continue _fun00013 }
 128:
            if(!option) { _fun00014_ip = 134; continue _fun00013 }
 131:
            if(zuuluu) { _fun00014_ip = 193; continue _fun00013 }
 134:
            if(!zuuluu) { _fun00014_ip = 246; continue _fun00013 }
 137:
            option = _closure1_slot5;
            zuuluu = {};
            zuuluu['userId'] = golfie;
            zuuluu['applicationId'] = oscard;
            zuuluu['location'] = report;
            verify = option.bind(tangon)(zuuluu);
            option = verify.then;
            zuuluu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = _closure1_slot6;
                    tangon = {};
                    entity = _closure2_slot0;
                    tangon['userId'] = entity;
                    entity = _closure2_slot1;
                    tangon['applicationId'] = entity;
                    entity = _closure2_slot2;
                    tangon['location'] = entity;
                    entity = _closure2_slot3;
                    tangon['onConfirm'] = entity;
                    entity = _closure2_slot4;
                    tangon['onCancel'] = entity;
                    entity = undefined;
                    zuuluu = argFoo;
                    zuuluu = report.bind(entity)(zuuluu, tangon);
                    if(zuuluu) { _fun00016_ip = 78; continue _fun00015 }
 68:
                    report = _closure2_slot3;
                    tangon = null;
                    zuuluu = tangon == report;
 78:
                    if(zuuluu) { _fun00016_ip = 89; continue _fun00015 }
 81:
                    michal = _closure2_slot3;
                    michal = michal.bind(entity)();
 89:
                    return entity;
                }
            };
            verify = option.bind(verify)(zuuluu);
            option = verify.catch;
            zuuluu = function(argFoo) {
                tangon = _closure1_slot6;
                zuuluu = {};
                michal = _closure2_slot0;
                zuuluu['userId'] = michal;
                michal = _closure2_slot1;
                zuuluu['applicationId'] = michal;
                michal = _closure2_slot2;
                zuuluu['location'] = michal;
                michal = _closure2_slot3;
                zuuluu['onConfirm'] = michal;
                entity = _closure2_slot4;
                zuuluu['onCancel'] = entity;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(michal, zuuluu);
                return entity;
            };
            zuuluu = option.bind(verify)(zuuluu);
            _fun00014_ip = 246; continue _fun00013;
 193:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 5;
            zuuluu = verify[zuuluu];
            verify = option.bind(tangon)(zuuluu);
            option = verify.openAcceptFriendRequestConfirmModal;
            zuuluu = {};
            offset = function() { // Original name: onConfirm
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = _closure1_slot5;
                    zuuluu = {};
                    entity = _closure2_slot0;
                    zuuluu['userId'] = entity;
                    entity = _closure2_slot1;
                    zuuluu['applicationId'] = entity;
                    entity = _closure2_slot2;
                    zuuluu['location'] = entity;
                    entity = true;
                    zuuluu['confirmStrangerRequest'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot3;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00018_ip = 68; continue _fun00017 }
 60:
                    michal = _closure2_slot3;
                    michal = michal.bind(entity)();
 68:
                    return entity;
                }
            };
            zuuluu['onConfirm'] = offset;
            offset = function() { // Original name: onCancel
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00020_ip = 23; continue _fun00019 }
 13:
                    michal = _closure2_slot4;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['onCancel'] = offset;
            zuuluu = option.bind(verify)(zuuluu);
 246:
            return tangon;
 248:
            zuuluu = _closure1_slot5;
            michal = {};
            michal['userId'] = golfie;
            michal['applicationId'] = oscard;
            michal['location'] = report;
            report = true;
            michal['confirmStrangerRequest'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00022_ip = 23; continue _fun00021 }
 13:
                    michal = _closure2_slot3;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['maybeConfirmFriendRequestAccept'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/people/PeopleUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();