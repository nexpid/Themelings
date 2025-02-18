// app/modules/activities/useEmbeddedActivityState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useEmbeddedActivityState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useEmbeddedActivityState
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot2;
        zuuluu = tangon.getId;
        zuuluu = zuuluu.bind(tangon)();
        var _closure2_slot1 = zuuluu;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStoresObject;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = _closure1_slot3;
                michal = oscard.getSelfEmbeddedActivityForChannel;
                zuuluu = _closure2_slot0;
                tangon = michal.bind(oscard)(zuuluu);
                var _closure3_slot0 = tangon;
                michal = oscard.getEmbeddedActivitiesForChannel;
                oscard = michal.bind(oscard)(zuuluu);
                zuuluu = oscard.find;
                michal = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        michal = entity.applicationId;
                        tangon = _closure3_slot0;
                        entity = null;
                        tangon = entity == tangon;
                        entity = undefined;
                        if(tangon) { _fun00004_ip = 35; continue _fun00003 }
 26:
                        zuuluu = _closure3_slot0;
                        entity = zuuluu.applicationId;
 35:
                        entity = michal === entity;
                        return entity;
                    }
                };
                oscard = zuuluu.bind(oscard)(michal);
                michal = null;
                golfie = michal == oscard;
                zuuluu = undefined;
                if(golfie) { _fun00002_ip = 74; continue _fun00001 }
 68:
                zuuluu = oscard.participants;
 74:
                if(!(michal == zuuluu)) { _fun00002_ip = 124; continue _fun00001 }
 78:
                golfie = michal == oscard;
                zuuluu = undefined;
                if(golfie) { _fun00002_ip = 93; continue _fun00001 }
 87:
                zuuluu = oscard.userIds;
 93:
                golfie = michal != zuuluu;
                zuuluu = false;
                if(!golfie) { _fun00002_ip = 167; continue _fun00001 }
 102:
                verify = oscard.userIds;
                golfie = verify.has;
                entity = _closure2_slot1;
                zuuluu = golfie.bind(verify)(entity);
                _fun00002_ip = 167; continue _fun00001;
 124:
                golfie = michal == oscard;
                entity = undefined;
                if(golfie) { _fun00002_ip = 163; continue _fun00001 }
 133:
                golfie = oscard.participants;
                oscard = michal == golfie;
                entity = undefined;
                if(oscard) { _fun00002_ip = 163; continue _fun00001 }
 148:
                oscard = golfie.find;
                report = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.isActivityParticipantCurrentUserCurrentSession;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = oscard.bind(golfie)(report);
 163:
                zuuluu = michal != entity;
 167:
                entity = {};
                entity['userActivity'] = tangon;
                michal = michal != zuuluu;
                if(!michal) { _fun00002_ip = 184; continue _fun00001 }
 181:
                michal = zuuluu;
 184:
                entity['inActivity'] = michal;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal, entity);
        entity = {};
        zuuluu = michal.userActivity;
        entity['userActivity'] = zuuluu;
        michal = michal.inActivity;
        entity['inActivity'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();