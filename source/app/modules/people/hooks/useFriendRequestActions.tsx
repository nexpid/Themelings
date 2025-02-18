// app/modules/people/hooks/useFriendRequestActions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/people/hooks/useFriendRequestActions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFriendRequestActions
        entity = argFoo;
        golfie = entity.userId;
        var _closure2_slot0 = golfie;
        foxtra = entity.applicationId;
        var _closure2_slot1 = foxtra;
        yankee = entity.isGameRelationship;
        var _closure2_slot2 = yankee;
        offset = entity.location;
        var _closure2_slot3 = offset;
        romeon = entity.friendToken;
        var _closure2_slot4 = romeon;
        option = entity.onConfirm;
        var _closure2_slot5 = option;
        verify = entity.onCancel;
        var _closure2_slot6 = verify;
        oscard = _closure1_slot2;
        tangon = oscard.useCallback;
        michal = new Array(4);
        michal[0] = foxtra;
        michal[1] = yankee;
        michal[2] = offset;
        michal[3] = golfie;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 1;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.cancelFriendRequest;
                michal = {};
                oscard = _closure2_slot0;
                michal['userId'] = oscard;
                golfie = _closure2_slot2;
                oscard = null;
                if(!golfie) { _fun00002_ip = 57; continue _fun00001 }
 53:
                oscard = _closure2_slot1;
 57:
                michal['applicationId'] = oscard;
                report = _closure2_slot3;
                michal['location'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        michal = tangon.bind(oscard)(entity, michal);
        entity = {};
        report = oscard.useCallback;
        tangon = new Array(7);
        tangon[0] = foxtra;
        tangon[1] = romeon;
        tangon[2] = yankee;
        tangon[3] = offset;
        tangon[4] = verify;
        tangon[5] = option;
        tangon[6] = golfie;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 1;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.maybeConfirmFriendRequestAccept;
                michal = {};
                oscard = _closure2_slot0;
                michal['userId'] = oscard;
                golfie = _closure2_slot2;
                oscard = null;
                if(!golfie) { _fun00004_ip = 57; continue _fun00003 }
 53:
                oscard = _closure2_slot1;
 57:
                michal['applicationId'] = oscard;
                oscard = _closure2_slot3;
                michal['location'] = oscard;
                oscard = _closure2_slot4;
                michal['friendToken'] = oscard;
                oscard = _closure2_slot5;
                michal['onConfirm'] = oscard;
                report = _closure2_slot6;
                michal['onCancel'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        zuuluu = report.bind(oscard)(zuuluu, tangon);
        entity['acceptFriendRequest'] = zuuluu;
        entity['cancelFriendRequest'] = michal;
        return entity;
    };
    zuuluu['useFriendRequestActions'] = michal;
    return entity;
})();