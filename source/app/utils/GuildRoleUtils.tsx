// app/utils/GuildRoleUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    report = function(argFoo) { // Original name: fromServerRole
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.id;
            entity['id'] = michal;
            michal = zuuluu.name;
            entity['name'] = michal;
            report = _closure1_slot2;
            tangon = _closure1_slot3;
            michal = 0;
            tangon = tangon[michal];
            option = undefined;
            golfie = report.bind(option)(tangon);
            report = golfie.deserialize;
            tangon = zuuluu.permissions;
            tangon = report.bind(golfie)(tangon);
            entity['permissions'] = tangon;
            tangon = zuuluu.mentionable;
            entity['mentionable'] = tangon;
            tangon = zuuluu.position;
            entity['position'] = tangon;
            tangon = zuuluu.position;
            entity['originalPosition'] = tangon;
            tangon = zuuluu.color;
            entity['color'] = tangon;
            report = zuuluu.color;
            tangon = null;
            golfie = tangon != report;
            report = null;
            if(!golfie) { _fun00002_ip = 171; continue _fun00001 }
 124:
            golfie = zuuluu.color;
            report = null;
            if(!(michal !== golfie)) { _fun00002_ip = 171; continue _fun00001 }
 135:
            golfie = _closure1_slot0;
            verify = _closure1_slot3;
            oscard = 1;
            oscard = verify[oscard];
            option = golfie.bind(option)(oscard);
            golfie = option.int2hex;
            oscard = zuuluu.color;
            report = golfie.bind(option)(oscard);
 171:
            entity['colorString'] = report;
            report = zuuluu.hoist;
            entity['hoist'] = report;
            report = zuuluu.managed;
            entity['managed'] = report;
            report = zuuluu.tags;
            entity['tags'] = report;
            report = zuuluu.icon;
            entity['icon'] = report;
            report = zuuluu.unicode_emoji;
            entity['unicodeEmoji'] = report;
            zuuluu = zuuluu.flags;
            tangon = tangon != zuuluu;
            michal = 0;
            if(!tangon) { _fun00002_ip = 246; continue _fun00001 }
 243:
            michal = zuuluu;
 246:
            entity['flags'] = michal;
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tangon = function(argFoo, argBar) { // Original name: sortClientRoles
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 73; continue _fun00003 }
 18:
            zuuluu = report.length;
            entity = 1;
            entity = zuuluu - entity;
            var _closure2_slot1 = entity;
            entity = {};
            var _closure2_slot2 = entity;
            tangon = report.sort;
            zuuluu = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    michal = argBar;
                    golfie = _closure2_slot0;
                    report = zuuluu.id;
                    oscard = inf;
                    tangon = oscard;
                    if(!(golfie !== report)) { _fun00006_ip = 55; continue _fun00005 }
 35:
                    report = zuuluu.originalPosition;
                    golfie = null;
                    if(!(golfie == report)) { _fun00006_ip = 52; continue _fun00005 }
 47:
                    report = zuuluu.position;
 52:
                    tangon = -report;
 55:
                    report = _closure2_slot0;
                    entity = michal.id;
                    if(!(report !== entity)) { _fun00006_ip = 88; continue _fun00005 }
 68:
                    entity = michal.originalPosition;
                    report = null;
                    if(!(report == entity)) { _fun00006_ip = 85; continue _fun00005 }
 80:
                    entity = michal.position;
 85:
                    oscard = -entity;
 88:
                    report = tangon === oscard;
                    if(report) { _fun00006_ip = 118; continue _fun00005 }
 95:
                    entity = -1;
                    if(!(!(tangon < oscard))) { _fun00006_ip = 116; continue _fun00005 }
 105:
                    tangon = 1;
                    if(!report) { _fun00006_ip = 113; continue _fun00005 }
 111:
                    tangon = 0;
 113:
                    entity = tangon;
 116:
                    _fun00006_ip = 165; continue _fun00005;
 118:
                    oscard = _closure1_slot1;
                    report = _closure1_slot3;
                    tangon = 2;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.compare;
                    zuuluu = zuuluu.id;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 165:
                    return entity;
                }
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                zuuluu = argFoo;
                tangon = _closure2_slot1;
                michal = argBar;
                michal = tangon - michal;
                zuuluu['position'] = michal;
                michal = _closure2_slot2;
                entity = zuuluu.id;
                michal[entity] = zuuluu;
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
 73:
            entity = {};
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 3;
    oscard = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/GuildRoleUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: fromSerializedGuildRole
        zuuluu = argFoo;
        tangon = _closure1_slot2;
        michal = _closure1_slot3;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        report = tangon.bind(entity)(michal);
        tangon = report.deserialize;
        michal = zuuluu.permissions;
        michal = tangon.bind(report)(michal);
        zuuluu['permissions'] = michal;
        return entity;
    };
    zuuluu['fromSerializedGuildRole'] = oscard;
    zuuluu['fromServerRole'] = report;
    zuuluu['sortClientRoles'] = tangon;
    michal = function(argFoo, argBar) { // Original name: sortServerRoles
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argBar;
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 43; continue _fun00007 }
 9:
            tangon = _closure1_slot5;
            michal = zuuluu.map;
            entity = _closure1_slot4;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            _fun00008_ip = 45; continue _fun00007;
 43:
            entity = {};
 45:
            return entity;
        }
    };
    zuuluu['sortServerRoles'] = michal;
    return entity;
})();