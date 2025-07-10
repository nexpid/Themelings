// app/modules/forwarding/isStaffToNonStaffForward.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo) { // Original name: isStaffChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.isPrivate;
            michal = michal.bind(entity)();
            if(michal) { _fun00002_ip = 75; continue _fun00001 }
 16:
            report = _closure1_slot1;
            tangon = report.getGuild;
            michal = entity.guild_id;
            tangon = tangon.bind(report)(michal);
            michal = null;
            michal = michal != tangon;
            if(!michal) { _fun00002_ip = 73; continue _fun00001 }
 47:
            report = tangon.features;
            tangon = report.has;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.INTERNAL_EMPLOYEE_ONLY;
            michal = tangon.bind(report)(zuuluu);
 73:
            return michal;
 75:
            zuuluu = entity.recipients;
            michal = zuuluu.every;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.getUser;
                    entity = argFoo;
                    zuuluu = michal.bind(zuuluu)(entity);
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 40; continue _fun00003 }
 30:
                    michal = zuuluu.isStaff;
                    entity = michal.bind(zuuluu)();
 40:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forwarding/isStaffToNonStaffForward.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: isStaffToNonStaffForward
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argBar;
            zuuluu = _closure1_slot2;
            entity = zuuluu.getCurrentUser;
            tangon = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != tangon)) { _fun00006_ip = 112; continue _fun00005 }
 25:
            zuuluu = tangon.isStaff;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00006_ip = 112; continue _fun00005 }
 38:
            oscard = _closure1_slot0;
            tangon = oscard.getChannel;
            zuuluu = argFoo;
            zuuluu = zuuluu.channel_id;
            tangon = tangon.bind(oscard)(zuuluu);
            entity = entity != tangon;
            if(!entity) { _fun00006_ip = 110; continue _fun00005 }
 67:
            zuuluu = _closure1_slot4;
            michal = undefined;
            michal = zuuluu.bind(michal)(tangon);
            zuuluu = !michal;
            michal = !zuuluu;
            if(zuuluu) { _fun00006_ip = 107; continue _fun00005 }
 87:
            tangon = report.some;
            zuuluu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure1_slot0;
                    michal = tangon.getChannel;
                    entity = argFoo;
                    report = michal.bind(tangon)(entity);
                    entity = null;
                    entity = entity != report;
                    if(!entity) { _fun00008_ip = 62; continue _fun00007 }
 29:
                    michal = report.isPrivate;
                    michal = michal.bind(report)();
                    michal = !michal;
                    if(!michal) { _fun00008_ip = 59; continue _fun00007 }
 45:
                    tangon = _closure1_slot4;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)(report);
                    michal = !zuuluu;
 59:
                    entity = michal;
 62:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu);
 107:
            entity = michal;
 110:
            return entity;
 112:
            entity = false;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();