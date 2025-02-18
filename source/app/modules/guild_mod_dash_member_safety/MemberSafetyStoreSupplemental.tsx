// app/modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    tangon = function(argFoo) { // Original name: getMemberSupplementalByGuildId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot2;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00002_ip = 30; continue _fun00001 }
 20:
            tangon = _closure1_slot2;
            zuuluu = {};
            tangon[michal] = zuuluu;
 30:
            entity = _closure1_slot2;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = {};
    var _closure1_slot2 = entity;
    entity = 1;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: hasMemberSupplemental
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot2;
            entity = entity[tangon];
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00004_ip = 42; continue _fun00003 }
 23:
            michal = _closure1_slot2;
            tangon = michal[tangon];
            michal = argBar;
            michal = tangon[michal];
            entity = zuuluu != michal;
 42:
            return entity;
        }
    };
    zuuluu['hasMemberSupplemental'] = report;
    zuuluu['getMemberSupplementalByGuildId'] = tangon;
    michal = function(argFoo, argBar) { // Original name: syncMemberSupplemental
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argBar;
            tangon = zuuluu.length;
            michal = 0;
            if(!(michal !== tangon)) { _fun00006_ip = 56; continue _fun00005 }
 16:
            report = _closure1_slot3;
            tangon = undefined;
            michal = argFoo;
            michal = report.bind(tangon)(michal);
            var _closure2_slot0 = michal;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure2_slot0;
                    michal = report.userId;
                    golfie = zuuluu[michal];
                    michal = report.joinSourceType;
                    tangon = null;
                    if(!(tangon == michal)) { _fun00008_ip = 49; continue _fun00007 }
 31:
                    oscard = tangon == golfie;
                    zuuluu = undefined;
                    if(oscard) { _fun00008_ip = 46; continue _fun00007 }
 40:
                    zuuluu = golfie.joinSourceType;
 46:
                    michal = zuuluu;
 49:
                    zuuluu = tangon != michal;
                    oscard = null;
                    if(!zuuluu) { _fun00008_ip = 61; continue _fun00007 }
 58:
                    oscard = michal;
 61:
                    michal = tangon != oscard;
                    if(!michal) { _fun00008_ip = 108; continue _fun00007 }
 68:
                    verify = _closure1_slot0;
                    option = _closure1_slot1;
                    zuuluu = 0;
                    option = option[zuuluu];
                    zuuluu = undefined;
                    zuuluu = verify.bind(zuuluu)(option);
                    zuuluu = zuuluu.JoinSourceType;
                    zuuluu = zuuluu.UNSPECIFIED;
                    michal = oscard !== zuuluu;
 108:
                    if(michal) { _fun00008_ip = 121; continue _fun00007 }
 111:
                    zuuluu = report.sourceInviteCode;
                    michal = tangon == zuuluu;
 121:
                    if(michal) { _fun00008_ip = 160; continue _fun00007 }
 124:
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 0;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = option.bind(michal)(zuuluu);
                    michal = michal.JoinSourceType;
                    oscard = michal.INVITE;
 160:
                    zuuluu = _closure2_slot0;
                    michal = report.userId;
                    entity = {};
                    option = report.userId;
                    entity['userId'] = option;
                    verify = report.sourceInviteCode;
                    if(!(tangon == verify)) { _fun00008_ip = 208; continue _fun00007 }
 190:
                    offset = tangon == golfie;
                    option = undefined;
                    if(offset) { _fun00008_ip = 205; continue _fun00007 }
 199:
                    option = golfie.sourceInviteCode;
 205:
                    verify = option;
 208:
                    offset = tangon != verify;
                    option = null;
                    if(!offset) { _fun00008_ip = 220; continue _fun00007 }
 217:
                    option = verify;
 220:
                    entity['sourceInviteCode'] = option;
                    entity['joinSourceType'] = oscard;
                    option = report.inviterId;
                    if(!(tangon == option)) { _fun00008_ip = 258; continue _fun00007 }
 240:
                    verify = tangon == golfie;
                    oscard = undefined;
                    if(verify) { _fun00008_ip = 255; continue _fun00007 }
 249:
                    oscard = golfie.inviterId;
 255:
                    option = oscard;
 258:
                    verify = tangon != option;
                    oscard = null;
                    if(!verify) { _fun00008_ip = 270; continue _fun00007 }
 267:
                    oscard = option;
 270:
                    entity['inviterId'] = oscard;
                    report = report.integrationType;
                    if(!(tangon == report)) { _fun00008_ip = 303; continue _fun00007 }
 285:
                    option = tangon == golfie;
                    oscard = undefined;
                    if(option) { _fun00008_ip = 300; continue _fun00007 }
 294:
                    oscard = golfie.integrationType;
 300:
                    report = oscard;
 303:
                    oscard = tangon != report;
                    tangon = null;
                    if(!oscard) { _fun00008_ip = 315; continue _fun00007 }
 312:
                    tangon = report;
 315:
                    entity['integrationType'] = tangon;
                    zuuluu[michal] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = true;
            return entity;
 56:
            entity = false;
            return entity;
        }
    };
    zuuluu['syncMemberSupplemental'] = michal;
    return entity;
})();