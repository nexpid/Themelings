// app/modules/user/isStaffFromRawUser.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserFlags;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user/isStaffFromRawUser.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: isStaff
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = tangon.flags;
            zuuluu = null;
            michal = zuuluu != entity;
            report = 0;
            if(!michal) { _fun00002_ip = 22; continue _fun00001 }
 19:
            report = entity;
 22:
            entity = _closure1_slot0;
            michal = entity.STAFF;
            michal = report & michal;
            entity = entity.STAFF;
            entity = michal === entity;
            if(entity) { _fun00002_ip = 71; continue _fun00001 }
 52:
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00002_ip = 67; continue _fun00001 }
 61:
            michal = tangon.personal_connection_id;
 67:
            entity = zuuluu != michal;
 71:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();