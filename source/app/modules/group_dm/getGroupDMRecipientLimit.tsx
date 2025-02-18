// app/modules/group_dm/getGroupDMRecipientLimit.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot1 = golfie;
    tangon = tangon.MAX_GROUP_DM_STAFF_PARTICIPANTS;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/group_dm/getGroupDMRecipientLimit.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getGroupDMRecipientLimit
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            entity = tangon.getCurrentUser;
            report = entity.bind(tangon)();
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 38; continue _fun00001 }
 25:
            tangon = report.isStaff;
            tangon = tangon.bind(report)();
            if(tangon) { _fun00002_ip = 68; continue _fun00001 }
 38:
            if(!(entity != zuuluu)) { _fun00002_ip = 54; continue _fun00001 }
 42:
            tangon = zuuluu.userLimit;
            entity = 0;
            if(!(!(tangon > entity))) { _fun00002_ip = 60; continue _fun00001 }
 54:
            entity = _closure1_slot1;
            _fun00002_ip = 66; continue _fun00001;
 60:
            entity = zuuluu.userLimit;
 66:
            _fun00002_ip = 72; continue _fun00001;
 68:
            entity = _closure1_slot2;
 72:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();