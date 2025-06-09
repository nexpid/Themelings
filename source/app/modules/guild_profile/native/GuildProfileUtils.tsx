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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_profile/native/GuildProfileUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        michal = _closure1_slot5;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 142; continue _fun00001 }
 16:
                entity = {};
                golfie = _closure1_slot5;
                tangon = golfie.canAccessGuildSettings;
                oscard = _closure2_slot0;
                tangon = tangon.bind(golfie)(oscard);
                entity['canAccessSettings'] = tangon;
                report = golfie.can;
                tangon = _closure1_slot6;
                tangon = tangon.CHANGE_NICKNAME;
                tangon = report.bind(golfie)(tangon, oscard);
                if(tangon) { _fun00002_ip = 100; continue _fun00001 }
 70:
                option = _closure1_slot5;
                golfie = option.can;
                report = _closure1_slot6;
                oscard = report.MANAGE_NICKNAMES;
                report = _closure2_slot0;
                tangon = golfie.bind(option)(oscard, report);
 100:
                entity['canEditNickname'] = tangon;
                report = _closure1_slot5;
                tangon = report.can;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.MANAGE_CHANNELS;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['canManageChannels'] = michal;
                _fun00002_ip = 152; continue _fun00001;
 142:
                entity = {'canAccessSettings': false, 'canEditNickname': false, 'canManageChannels': false};
 152:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useGuildProfilePermissions'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useProfilePrimaryColor
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = null;
            entity = tangon != michal;
            oscard = null;
            if(!entity) { _fun00004_ip = 92; continue _fun00003 }
 14:
            entity = michal.brandColorPrimary;
            entity = tangon == entity;
            oscard = null;
            if(!entity) { _fun00004_ip = 92; continue _fun00003 }
 29:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 5;
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
            entity = 6;
            entity = zuuluu[entity];
            zuuluu = undefined;
            report = report.bind(zuuluu)(entity);
            entity = argBar;
            entity = report.bind(zuuluu)(oscard, entity);
            report = tangon == michal;
            if(report) { _fun00004_ip = 139; continue _fun00003 }
 133:
            zuuluu = michal.brandColorPrimary;
 139:
            if(!(tangon != zuuluu)) { _fun00004_ip = 149; continue _fun00003 }
 143:
            entity = michal.brandColorPrimary;
 149:
            return entity;
        }
    };
    zuuluu['useProfilePrimaryColor'] = tangon;
    michal = function(argFoo) { // Original name: getProfilePrimaryColor
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 365; continue _fun00005 }
 12:
            zuuluu = michal.brandColorPrimary;
            if(!(entity == zuuluu)) { _fun00006_ip = 357; continue _fun00005 }
 25:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 5;
            tangon = report[tangon];
            report = undefined;
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.getGuildIconURL;
            tangon = {};
            option = michal.id;
            tangon['id'] = option;
            option = michal.icon;
            tangon['icon'] = option;
            option = 64;
            tangon['size'] = option;
            oscard = oscard.bind(golfie)(tangon);
            if(!(entity != oscard)) { _fun00006_ip = 355; continue _fun00005 }
 95:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 6;
            verify = option[tangon];
            offset = golfie.bind(report)(verify);
            verify = offset.maybeFetchColors;
            verify = verify.bind(offset)(oscard);
            tangon = option[tangon];
            tangon = golfie.bind(report)(tangon);
            golfie = tangon.useColorStore;
            tangon = golfie.getState;
            tangon = tangon.bind(golfie)();
            tangon = tangon.palette;
            oscard = tangon[oscard];
            tangon = entity == oscard;
            golfie = undefined;
            if(tangon) { _fun00006_ip = 176; continue _fun00005 }
 170:
            tangon = 0;
            golfie = oscard[tangon];
 176:
            if(!(entity == golfie)) { _fun00006_ip = 182; continue _fun00005 }
 180:
            return entity;
 182:
            oscard = _closure1_slot3;
            tangon = 3;
            oscard = oscard.bind(report)(golfie, tangon);
            tangon = 0;
            yankee = oscard[tangon];
            option = 1;
            verify = oscard[option];
            tangon = 2;
            golfie = oscard[tangon];
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            offset = 7;
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
            if(!tangon) { _fun00006_ip = 303; continue _fun00005 }
 293:
            tangon = _closure1_slot4;
            option = tangon.saturation;
 303:
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
 355:
            return entity;
 357:
            michal = michal.brandColorPrimary;
            return michal;
 365:
            return entity;
        }
    };
    zuuluu['getProfilePrimaryColor'] = michal;
    return entity;
})();