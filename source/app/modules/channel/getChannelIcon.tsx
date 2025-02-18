// app/modules/channel/getChannelIcon.tsx
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/getChannelIcon.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getChannelIconURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = arguments[1];
            report = undefined;
            if(!(oscard === report)) { _fun00002_ip = 15; continue _fun00001 }
 12:
            oscard = 32;
 15:
            tangon = michal.type;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.DM;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 124; continue _fun00001 }
 37:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GROUP_DM;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 53; continue _fun00001 }
 51:
            return report;
 53:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.getChannelIconURL;
            zuuluu = {};
            option = michal.id;
            zuuluu['id'] = option;
            option = michal.icon;
            zuuluu['icon'] = option;
            option = michal.getApplicationId;
            option = option.bind(michal)();
            zuuluu['applicationId'] = option;
            zuuluu['size'] = oscard;
            zuuluu = tangon.bind(golfie)(zuuluu);
            return zuuluu;
 124:
            tangon = michal.recipients;
            zuuluu = tangon.map;
            michal = _closure1_slot4;
            michal = michal.getUser;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 3;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot3;
            entity = 1;
            michal = michal.bind(report)(zuuluu, entity);
            entity = 0;
            tangon = michal[entity];
            entity = null;
            michal = entity == tangon;
            if(michal) { _fun00002_ip = 230; continue _fun00001 }
 214:
            zuuluu = tangon.getAvatarURL;
            michal = arguments[2];
            entity = zuuluu.bind(tangon)(report, oscard, michal);
 230:
            return entity;
        }
    };
    zuuluu['getChannelIconURL'] = tangon;
    michal = function(argFoo) { // Original name: getChannelIconSource
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = michal.type;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.DM;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 119; continue _fun00003 }
 25:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GROUP_DM;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 43; continue _fun00003 }
 39:
            zuuluu = undefined;
            return zuuluu;
 43:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.getChannelIconSource;
            zuuluu = {};
            oscard = michal.id;
            zuuluu['id'] = oscard;
            oscard = michal.icon;
            zuuluu['icon'] = oscard;
            oscard = michal.getApplicationId;
            oscard = oscard.bind(michal)();
            zuuluu['applicationId'] = oscard;
            oscard = 128;
            zuuluu['size'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 119:
            tangon = michal.recipients;
            zuuluu = tangon.map;
            michal = _closure1_slot4;
            michal = michal.getUser;
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.filter;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            tangon = undefined;
            michal = oscard.bind(tangon)(michal);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(report)(michal);
            michal = _closure1_slot3;
            entity = 1;
            michal = michal.bind(tangon)(zuuluu, entity);
            entity = 0;
            zuuluu = michal[entity];
            entity = null;
            michal = entity != zuuluu;
            if(!michal) { _fun00004_ip = 222; continue _fun00003 }
 211:
            michal = zuuluu.getAvatarSource;
            entity = michal.bind(zuuluu)(tangon);
 222:
            return entity;
        }
    };
    zuuluu['getChannelIconSource'] = michal;
    return entity;
})();