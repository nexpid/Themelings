// app/modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    tango = function(argFoo) { // Original name: getMemberSupplementalByGuildId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot2;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu == tango)) { _fun00002_ip = 30; continue _fun00001 }
 20:
            tango = _closure1_slot2;
            zulu = {};
            tango[mike] = zulu;
 30:
            entity = _closure1_slot2;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot3 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = {};
    var _closure1_slot2 = entity;
    entity = 1;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: hasMemberSupplemental
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot2;
            entity = entity[tango];
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun00004_ip = 42; continue _fun00003 }
 23:
            mike = _closure1_slot2;
            tango = mike[tango];
            mike = argBar;
            mike = tango[mike];
            entity = zulu != mike;
 42:
            return entity;
        }
    };
    zulu['hasMemberSupplemental'] = report;
    zulu['getMemberSupplementalByGuildId'] = tango;
    mike = function(argFoo, argBar) { // Original name: syncMemberSupplemental
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argBar;
            tango = zulu.length;
            mike = 0;
            if(!(mike !== tango)) { _fun00006_ip = 56; continue _fun00005 }
 16:
            report = _closure1_slot3;
            tango = undefined;
            mike = argFoo;
            mike = report.bind(tango)(mike);
            var _closure2_slot0 = mike;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    zulu = _closure2_slot0;
                    mike = report.userId;
                    golf = zulu[mike];
                    mike = report.joinSourceType;
                    tango = null;
                    if(!(tango == mike)) { _fun00008_ip = 49; continue _fun00007 }
 31:
                    oscar = tango == golf;
                    zulu = undefined;
                    if(oscar) { _fun00008_ip = 46; continue _fun00007 }
 40:
                    zulu = golf.joinSourceType;
 46:
                    mike = zulu;
 49:
                    zulu = tango != mike;
                    oscar = null;
                    if(!zulu) { _fun00008_ip = 61; continue _fun00007 }
 58:
                    oscar = mike;
 61:
                    mike = tango != oscar;
                    if(!mike) { _fun00008_ip = 108; continue _fun00007 }
 68:
                    verify = _closure1_slot0;
                    options = _closure1_slot1;
                    zulu = 0;
                    options = options[zulu];
                    zulu = undefined;
                    zulu = verify.bind(zulu)(options);
                    zulu = zulu.JoinSourceType;
                    zulu = zulu.UNSPECIFIED;
                    mike = oscar !== zulu;
 108:
                    if(mike) { _fun00008_ip = 121; continue _fun00007 }
 111:
                    zulu = report.sourceInviteCode;
                    mike = tango == zulu;
 121:
                    if(mike) { _fun00008_ip = 160; continue _fun00007 }
 124:
                    options = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 0;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = options.bind(mike)(zulu);
                    mike = mike.JoinSourceType;
                    oscar = mike.INVITE;
 160:
                    zulu = _closure2_slot0;
                    mike = report.userId;
                    entity = {};
                    options = report.userId;
                    entity['userId'] = options;
                    verify = report.sourceInviteCode;
                    if(!(tango == verify)) { _fun00008_ip = 208; continue _fun00007 }
 190:
                    offset = tango == golf;
                    options = undefined;
                    if(offset) { _fun00008_ip = 205; continue _fun00007 }
 199:
                    options = golf.sourceInviteCode;
 205:
                    verify = options;
 208:
                    offset = tango != verify;
                    options = null;
                    if(!offset) { _fun00008_ip = 220; continue _fun00007 }
 217:
                    options = verify;
 220:
                    entity['sourceInviteCode'] = options;
                    entity['joinSourceType'] = oscar;
                    options = report.inviterId;
                    if(!(tango == options)) { _fun00008_ip = 258; continue _fun00007 }
 240:
                    verify = tango == golf;
                    oscar = undefined;
                    if(verify) { _fun00008_ip = 255; continue _fun00007 }
 249:
                    oscar = golf.inviterId;
 255:
                    options = oscar;
 258:
                    verify = tango != options;
                    oscar = null;
                    if(!verify) { _fun00008_ip = 270; continue _fun00007 }
 267:
                    oscar = options;
 270:
                    entity['inviterId'] = oscar;
                    report = report.integrationType;
                    if(!(tango == report)) { _fun00008_ip = 303; continue _fun00007 }
 285:
                    options = tango == golf;
                    oscar = undefined;
                    if(options) { _fun00008_ip = 300; continue _fun00007 }
 294:
                    oscar = golf.integrationType;
 300:
                    report = oscar;
 303:
                    oscar = tango != report;
                    tango = null;
                    if(!oscar) { _fun00008_ip = 315; continue _fun00007 }
 312:
                    tango = report;
 315:
                    entity['integrationType'] = tango;
                    zulu[mike] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = true;
            return entity;
 56:
            entity = false;
            return entity;
        }
    };
    zulu['syncMemberSupplemental'] = mike;
    return entity;
})();