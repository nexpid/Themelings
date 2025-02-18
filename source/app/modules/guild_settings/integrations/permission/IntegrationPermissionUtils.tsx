// app/modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: toPermissionKey
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tangon = '';
        zuuluu = argFoo;
        michal = ':';
        entity = argBar;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    var _closure1_slot3 = tangon;
    entity = function(argFoo, argBar) { // Original name: commandPermissions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argBar;
            entity = {};
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.entries;
            michal = argFoo;
            verify = zuuluu.bind(tangon)(michal);
            michal = verify.length;
            option = 0;
            michal = option < michal;
            oscard = undefined;
            report = 2;
            tangon = 1;
            zuuluu = 0;
            if(!michal) { _fun00002_ip = 110; continue _fun00001 }
 54:
            yankee = verify[zuuluu];
            michal = _closure1_slot2;
            michal = michal.bind(oscard)(yankee, report);
            yankee = michal[option];
            michal = michal[tangon];
            foxtra = offset.includes;
            romeon = michal.type;
            romeon = foxtra.bind(offset)(romeon);
            if(!romeon) { _fun00002_ip = 98; continue _fun00001 }
 94:
            entity[yankee] = michal;
 98:
            zuuluu = zuuluu + 1;
            michal = verify.length;
            if(zuuluu < michal) { _fun00002_ip = 54; continue _fun00001 }
 110:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: commandName
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBar;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            entity = entity.ApplicationCommandType;
            tangon = entity.CHAT;
            michal = argFoo;
            entity = zuuluu;
            if(!(michal === tangon)) { _fun00004_ip = 58; continue _fun00003 }
 50:
            michal = '/';
            entity = michal + zuuluu;
 58:
            return entity;
        }
    };
    zuuluu['commandName'] = report;
    report = function(argFoo) { // Original name: commandPermissionChannels
        tangon = _closure1_slot4;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 2;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.ApplicationCommandPermissionType;
        entity = entity.CHANNEL;
        michal = new Array(1);
        michal[0] = entity;
        entity = argFoo;
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    zuuluu['commandPermissionChannels'] = report;
    report = function(argFoo) { // Original name: commandPermissionMembersRoles
        tangon = _closure1_slot4;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 2;
        michal = oscard[entity];
        zuuluu = undefined;
        michal = report.bind(zuuluu)(michal);
        michal = michal.ApplicationCommandPermissionType;
        golfie = michal.ROLE;
        michal = new Array(2);
        michal[0] = golfie;
        entity = oscard[entity];
        entity = report.bind(zuuluu)(entity);
        entity = entity.ApplicationCommandPermissionType;
        entity = entity.USER;
        michal[1] = entity;
        entity = argFoo;
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    zuuluu['commandPermissionMembersRoles'] = report;
    zuuluu['toPermissionKey'] = tangon;
    michal = function(argFoo) { // Original name: keyPermissions
        report = argFoo;
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.fromEntries;
        tangon = report.map;
        entity = function(argFoo) {
            michal = argFoo;
            report = _closure1_slot3;
            tangon = michal.id;
            zuuluu = michal.type;
            entity = undefined;
            zuuluu = report.bind(entity)(tangon, zuuluu);
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        };
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['keyPermissions'] = michal;
    return entity;
})();