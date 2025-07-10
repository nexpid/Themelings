// app/modules/guild_profile/native/GuildProfileUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_profile/native/GuildProfileUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useProfilePrimaryColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            entity = tangon != michal;
            oscard = null;
            if(!entity) { _fun00002_ip = 92; continue _fun00001 }
 14:
            entity = michal.brandColorPrimary;
            entity = tangon == entity;
            oscard = null;
            if(!entity) { _fun00002_ip = 92; continue _fun00001 }
 29:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = report.bind(entity)(zuuluu);
            zuuluu = report.getGuildIconURL;
            entity = {};
            golfie = michal.id;
            entity['id'] = golfie;
            golfie = michal.icon;
            entity['icon'] = golfie;
            golfie = 64;
            entity['size'] = golfie;
            oscard = zuuluu.bind(report)(entity);
 92:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 3;
            entity = zuuluu[entity];
            zuuluu = undefined;
            report = report.bind(zuuluu)(entity);
            entity = argBar;
            entity = report.bind(zuuluu)(oscard, entity);
            report = tangon == michal;
            if(report) { _fun00002_ip = 139; continue _fun00001 }
 133:
            zuuluu = michal.brandColorPrimary;
 139:
            if(!(tangon != zuuluu)) { _fun00002_ip = 149; continue _fun00001 }
 143:
            entity = michal.brandColorPrimary;
 149:
            return entity;
        }
    };
    zuuluu['useProfilePrimaryColor'] = tangon;
    michal = function(argFoo) { // Original name: getProfilePrimaryColor
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity != michal)) { _fun00004_ip = 359; continue _fun00003 }
 12:
            zuuluu = michal.brandColorPrimary;
            if(!(entity == zuuluu)) { _fun00004_ip = 351; continue _fun00003 }
 25:
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 2;
            tangon = tangon[oscard];
            report = undefined;
            option = golfie.bind(report)(tangon);
            golfie = option.getGuildIconURL;
            tangon = {};
            verify = michal.id;
            tangon['id'] = verify;
            verify = michal.icon;
            tangon['icon'] = verify;
            verify = 64;
            tangon['size'] = verify;
            golfie = golfie.bind(option)(tangon);
            if(!(entity != golfie)) { _fun00004_ip = 349; continue _fun00003 }
 95:
            verify = _closure1_slot0;
            tangon = _closure1_slot2;
            option = 3;
            offset = tangon[option];
            yankee = verify.bind(report)(offset);
            offset = yankee.maybeFetchColors;
            offset = offset.bind(yankee)(golfie);
            tangon = tangon[option];
            tangon = verify.bind(report)(tangon);
            verify = tangon.useColorStore;
            tangon = verify.getState;
            tangon = tangon.bind(verify)();
            tangon = tangon.palette;
            verify = tangon[golfie];
            tangon = entity == verify;
            golfie = undefined;
            if(tangon) { _fun00004_ip = 176; continue _fun00003 }
 170:
            tangon = 0;
            golfie = verify[tangon];
 176:
            if(!(entity == golfie)) { _fun00004_ip = 182; continue _fun00003 }
 180:
            return entity;
 182:
            tangon = _closure1_slot3;
            tangon = tangon.bind(report)(golfie, option);
            golfie = 0;
            yankee = tangon[golfie];
            option = 1;
            verify = tangon[option];
            golfie = tangon[oscard];
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            offset = 4;
            tangon = tangon[offset];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['r'] = yankee;
            tangon['g'] = verify;
            tangon['b'] = golfie;
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.toHsl;
            tangon = tangon.bind(oscard)();
            verify = tangon.h;
            golfie = tangon.s;
            oscard = tangon.l;
            tangon = _closure1_slot4;
            tangon = tangon.desaturateUserColors;
            if(!tangon) { _fun00004_ip = 297; continue _fun00003 }
 287:
            tangon = _closure1_slot4;
            option = tangon.saturation;
 297:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[offset];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['h'] = verify;
            golfie = golfie * option;
            zuuluu['s'] = golfie;
            zuuluu['l'] = oscard;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.toHexString;
            zuuluu = zuuluu.bind(tangon)();
            return zuuluu;
 349:
            return entity;
 351:
            michal = michal.brandColorPrimary;
            return michal;
 359:
            return entity;
        }
    };
    zuuluu['getProfilePrimaryColor'] = michal;
    return entity;
})();