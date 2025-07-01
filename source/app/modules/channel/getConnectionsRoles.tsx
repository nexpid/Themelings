// app/modules/channel/getConnectionsRoles.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.ChannelTypes;
    tangon = tangon.Permissions;
    offset = verify.GUILD_TEXT;
    golfie = new Array(6);
    golfie[0] = offset;
    offset = verify.GUILD_VOICE;
    golfie[1] = offset;
    offset = verify.GUILD_ANNOUNCEMENT;
    golfie[2] = offset;
    offset = verify.GUILD_FORUM;
    golfie[3] = offset;
    offset = verify.PUBLIC_THREAD;
    golfie[4] = offset;
    verify = verify.PRIVATE_THREAD;
    golfie[5] = verify;
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.combine;
    golfie = tangon.VIEW_CHANNEL;
    tangon = tangon.SEND_MESSAGES;
    tangon = option.bind(verify)(golfie, tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/getConnectionsRoles.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getConnectionsRoles
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            if(!(tangon != michal)) { _fun00002_ip = 143; continue _fun00001 }
 14:
            golfie = _closure1_slot4;
            oscard = golfie.includes;
            report = michal.type;
            report = oscard.bind(golfie)(report);
            if(!report) { _fun00002_ip = 143; continue _fun00001 }
 39:
            oscard = _closure1_slot3;
            report = oscard.getGuild;
            zuuluu = michal.guild_id;
            zuuluu = report.bind(oscard)(zuuluu);
            var _closure2_slot0 = zuuluu;
            if(!(tangon != zuuluu)) { _fun00002_ip = 137; continue _fun00001 }
 66:
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            michal = michal.permissionOverwrites;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.type;
                    entity = 0;
                    entity = entity === michal;
                    if(!entity) { _fun00004_ip = 92; continue _fun00003 }
 17:
                    report = _closure1_slot2;
                    tangon = report.getRoles;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    tangon = tangon.bind(report)(michal);
                    michal = zuuluu.id;
                    report = tangon[michal];
                    tangon = null;
                    oscard = tangon == report;
                    michal = undefined;
                    if(oscard) { _fun00004_ip = 88; continue _fun00003 }
 67:
                    report = report.tags;
                    oscard = tangon == report;
                    michal = undefined;
                    if(oscard) { _fun00004_ip = 88; continue _fun00003 }
 82:
                    michal = report.guild_connections;
 88:
                    entity = tangon === michal;
 92:
                    if(!entity) { _fun00004_ip = 145; continue _fun00003 }
 95:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 3;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.hasAny;
                    zuuluu = zuuluu.deny;
                    michal = _closure1_slot5;
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity = !michal;
 145:
                    return entity;
                }
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getRoles;
                entity = _closure2_slot0;
                entity = entity.id;
                michal = michal.bind(zuuluu)(entity);
                entity = argFoo;
                entity = entity.id;
                entity = michal[entity];
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                michal = null;
                entity = argFoo;
                entity = michal != entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 141; continue _fun00001;
 137:
            entity = new Array(0);
 141:
            return entity;
 143:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();