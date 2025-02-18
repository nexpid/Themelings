// app/modules/channel/isRoleRequired.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argCor;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
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
    tangon = tangon.GUILD_NON_CATEGORY_CHANNEL_TYPES;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/isRoleRequired.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: isRoleRequired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 193; continue _fun00001 }
 12:
            oscard = zuuluu.type;
            michal = zuuluu.guild_id;
            if(!(entity != michal)) { _fun00002_ip = 189; continue _fun00001 }
 29:
            report = _closure1_slot2;
            tangon = report.has;
            tangon = tangon.bind(report)(oscard);
            if(!tangon) { _fun00002_ip = 189; continue _fun00001 }
 52:
            tangon = zuuluu.isGuildVocal;
            tangon = tangon.bind(zuuluu)();
            if(!tangon) { _fun00002_ip = 116; continue _fun00001 }
 65:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 2;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.canEveryoneRole;
            tangon = _closure1_slot3;
            tangon = tangon.CONNECT;
            tangon = report.bind(oscard)(tangon, zuuluu);
            if(tangon) { _fun00002_ip = 116; continue _fun00001 }
 112:
            tangon = true;
            return tangon;
 116:
            tangon = zuuluu.permissionOverwrites;
            zuuluu = zuuluu.guild_id;
            zuuluu = tangon[zuuluu];
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 187; continue _fun00001 }
 138:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 3;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.has;
            zuuluu = zuuluu.deny;
            michal = _closure1_slot3;
            michal = michal.VIEW_CHANNEL;
            entity = tangon.bind(report)(zuuluu, michal);
 187:
            return entity;
 189:
            entity = false;
            return entity;
 193:
            entity = false;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();