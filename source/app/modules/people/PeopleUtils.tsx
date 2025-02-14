// app/modules/people/PeopleUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    golf = function(argFoo) { // Original name: acceptFriendRequest
        _fun80865: for(var _fun80865_ip = 0; ; ) switch(_fun80865_ip) {
 0:
            entity = argFoo;
            oscar = entity.userId;
            report = entity.applicationId;
            golf = entity.location;
            tango = entity.friendToken;
            entity = null;
            if(!(entity == report)) { _fun80865_ip = 89; continue _fun80865 }
 30:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.acceptFriendRequest;
            entity = {};
            entity['userId'] = oscar;
            entity['friendToken'] = tango;
            tango = {};
            tango['location'] = golf;
            entity['context'] = tango;
            entity = mike.bind(zulu)(entity);
            _fun80865_ip = 135; continue _fun80865;
 89:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.acceptGameFriendRequest;
            mike = {};
            mike['userId'] = oscar;
            mike['applicationId'] = report;
            entity = zulu.bind(tango)(mike);
 135:
            return entity;
        }
    };
    var _closure1_slot4 = golf;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = {};
    options = function(argFoo) { // Original name: removeFriend
        _fun80866: for(var _fun80866_ip = 0; ; ) switch(_fun80866_ip) {
 0:
            entity = argFoo;
            report = entity.userId;
            tango = entity.applicationId;
            oscar = entity.location;
            entity = null;
            if(!(entity == tango)) { _fun80866_ip = 69; continue _fun80866 }
 24:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.removeFriend;
            entity = {};
            entity['location'] = oscar;
            entity = mike.bind(zulu)(report, entity);
            _fun80866_ip = 115; continue _fun80866;
 69:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.removeGameFriend;
            entity = {};
            entity['userId'] = report;
            entity['applicationId'] = tango;
            entity = mike.bind(zulu)(entity);
 115:
            entity = undefined;
            return entity;
        }
    };
    mike['removeFriend'] = options;
    options = function(argFoo) { // Original name: cancelFriendRequest
        _fun80867: for(var _fun80867_ip = 0; ; ) switch(_fun80867_ip) {
 0:
            entity = argFoo;
            oscar = entity.userId;
            report = entity.applicationId;
            tango = entity.location;
            entity = null;
            if(!(entity == report)) { _fun80867_ip = 69; continue _fun80867 }
 24:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.cancelFriendRequest;
            entity = {};
            entity['location'] = tango;
            entity = mike.bind(zulu)(oscar, entity);
            _fun80867_ip = 115; continue _fun80867;
 69:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.cancelGameFriendRequest;
            mike = {};
            mike['userId'] = oscar;
            mike['applicationId'] = report;
            entity = zulu.bind(tango)(mike);
 115:
            return entity;
        }
    };
    mike['cancelFriendRequest'] = options;
    mike['acceptFriendRequest'] = golf;
    tango = function(argFoo) { // Original name: maybeConfirmFriendRequestAccept
        _fun80868: for(var _fun80868_ip = 0; ; ) switch(_fun80868_ip) {
 0:
            entity = argFoo;
            golf = entity.userId;
            var _closure2_slot0 = golf;
            oscar = entity.applicationId;
            var _closure2_slot1 = oscar;
            report = entity.location;
            var _closure2_slot2 = report;
            tango = entity.friendToken;
            var _closure2_slot3 = tango;
            mike = entity.onConfirm;
            var _closure2_slot4 = mike;
            offset = entity.onCancel;
            zulu = _closure1_slot3;
            mike = zulu.isStrangerRequest;
            options = mike.bind(zulu)(golf);
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 3;
            mike = zulu[mike];
            zulu = undefined;
            romeo = verify.bind(zulu)(mike);
            verify = romeo.isEligibleForFriendRequestAlerts;
            mike = 'useFriendRequestActions';
            mike = verify.bind(romeo)(mike);
            verify = null;
            if(!(verify == oscar)) { _fun80868_ip = 177; continue _fun80868 }
 119:
            if(!options) { _fun80868_ip = 177; continue _fun80868 }
 122:
            if(!mike) { _fun80868_ip = 177; continue _fun80868 }
 125:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 4;
            mike = verify[mike];
            verify = options.bind(zulu)(mike);
            options = verify.openAcceptFriendRequestConfirmModal;
            mike = {};
            yankee = function() { // Original name: onConfirm
                _fun80869: for(var _fun80869_ip = 0; ; ) switch(_fun80869_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = {};
                    entity = _closure2_slot0;
                    zulu['userId'] = entity;
                    entity = _closure2_slot1;
                    zulu['applicationId'] = entity;
                    entity = _closure2_slot2;
                    zulu['location'] = entity;
                    entity = _closure2_slot3;
                    zulu['friendToken'] = entity;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure2_slot4;
                    zulu = null;
                    if(!(zulu != tango)) { _fun80869_ip = 70; continue _fun80869 }
 62:
                    mike = _closure2_slot4;
                    mike = mike.bind(entity)();
 70:
                    return entity;
                }
            };
            mike['onConfirm'] = yankee;
            mike['onCancel'] = offset;
            mike = options.bind(verify)(mike);
            return zulu;
 177:
            mike = _closure1_slot4;
            entity = {};
            entity['userId'] = golf;
            entity['applicationId'] = oscar;
            entity['location'] = report;
            entity['friendToken'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['maybeConfirmFriendRequestAccept'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/people/PeopleUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();