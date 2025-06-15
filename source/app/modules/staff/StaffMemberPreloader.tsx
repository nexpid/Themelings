// app/modules/staff/StaffMemberPreloader.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.PRELOAD_SERVER_ID;
    var _closure1_slot4 = michal;
    michal = {};
    tangon = function() { // Original name: preloadStaffMembers
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCurrentUser;
            report = michal.bind(zuuluu)();
            tangon = null;
            michal = tangon != report;
            if(!michal) { _fun00002_ip = 35; continue _fun00001 }
 25:
            zuuluu = report.isStaff;
            michal = zuuluu.bind(report)();
 35:
            if(!michal) { _fun00002_ip = 60; continue _fun00001 }
 38:
            oscard = _closure1_slot2;
            report = oscard.getGuild;
            zuuluu = _closure1_slot4;
            zuuluu = report.bind(oscard)(zuuluu);
            michal = tangon != zuuluu;
 60:
            if(!michal) { _fun00002_ip = 110; continue _fun00001 }
 63:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            oscard = tangon.bind(michal)(zuuluu);
            report = oscard.requestMembers;
            offset = _closure1_slot4;
            verify = '';
            option = 0;
            golfie = false;
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
 110:
            entity = undefined;
            return entity;
        }
    };
    michal['preloadStaffMembers'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/staff/StaffMemberPreloader.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();