// app/modules/guild_role_subscriptions/RolePermissionUtils.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argCor;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: isChannelAccessDeniedBy
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00002_ip = 142; continue _fun00001 }
 18:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            verify = 1;
            michal = michal[verify];
            option = undefined;
            offset = zuuluu.bind(option)(michal);
            golfie = offset.has;
            zuuluu = report.deny;
            michal = _closure1_slot2;
            michal = michal.VIEW_CHANNEL;
            michal = golfie.bind(offset)(zuuluu, michal);
            zuuluu = !michal;
            michal = !zuuluu;
            if(!zuuluu) { _fun00002_ip = 139; continue _fun00001 }
 79:
            zuuluu = oscard.isGuildVocal;
            zuuluu = zuuluu.bind(oscard)();
            if(!zuuluu) { _fun00002_ip = 136; continue _fun00001 }
 92:
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[verify];
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.has;
            report = report.deny;
            tangon = _closure1_slot2;
            tangon = tangon.CONNECT;
            zuuluu = oscard.bind(golfie)(report, tangon);
 136:
            michal = zuuluu;
 139:
            entity = michal;
 142:
            return entity;
        }
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/RolePermissionUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: isAllChannelsRole
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.has;
        michal = argFoo;
        michal = michal.permissions;
        entity = _closure1_slot2;
        entity = entity.VIEW_CHANNEL;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['isAllChannelsRole'] = report;
    zuuluu['isChannelAccessDeniedBy'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isChannelAccessGrantedBy
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00004_ip = 167; continue _fun00003 }
 18:
            michal = _closure1_slot3;
            verify = undefined;
            michal = michal.bind(verify)(golfie, oscard);
            michal = !michal;
            if(!michal) { _fun00004_ip = 164; continue _fun00003 }
 42:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            offset = 1;
            zuuluu = zuuluu[offset];
            yankee = tangon.bind(verify)(zuuluu);
            option = yankee.has;
            tangon = oscard.allow;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.VIEW_CHANNEL;
            zuuluu = option.bind(yankee)(tangon, zuuluu);
            tangon = !zuuluu;
            zuuluu = !tangon;
            if(tangon) { _fun00004_ip = 161; continue _fun00003 }
 98:
            tangon = golfie.isGuildVocal;
            tangon = tangon.bind(golfie)();
            tangon = !tangon;
            if(tangon) { _fun00004_ip = 158; continue _fun00003 }
 114:
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            golfie = golfie[offset];
            option = option.bind(verify)(golfie);
            golfie = option.has;
            oscard = oscard.allow;
            report = _closure1_slot2;
            report = report.CONNECT;
            tangon = golfie.bind(option)(oscard, report);
 158:
            zuuluu = tangon;
 161:
            michal = zuuluu;
 164:
            entity = michal;
 167:
            return entity;
        }
    };
    zuuluu['isChannelAccessGrantedBy'] = michal;
    return entity;
})();