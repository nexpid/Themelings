// app/modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    tango = function(argFoo) { // Original name: getMemberSupplementalByGuildId
        _fun59285: for(var _fun59285_ip = 0; ; ) switch(_fun59285_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot2;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu == tango)) { _fun59285_ip = 30; continue _fun59285 }
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
        _fun59286: for(var _fun59286_ip = 0; ; ) switch(_fun59286_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot2;
            entity = entity[tango];
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun59286_ip = 42; continue _fun59286 }
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
        _fun59287: for(var _fun59287_ip = 0; ; ) switch(_fun59287_ip) {
 0:
            zulu = argBar;
            tango = zulu.length;
            mike = 0;
            if(!(mike !== tango)) { _fun59287_ip = 56; continue _fun59287 }
 16:
            report = _closure1_slot3;
            tango = undefined;
            mike = argFoo;
            mike = report.bind(tango)(mike);
            var _closure2_slot0 = mike;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun59288: for(var _fun59288_ip = 0; ; ) switch(_fun59288_ip) {
 0:
                    report = argFoo;
                    zulu = _closure2_slot0;
                    mike = report.userId;
                    golf = zulu[mike];
                    mike = report.joinSourceType;
                    tango = null;
                    if(!(tango == mike)) { _fun59288_ip = 49; continue _fun59288 }
 31:
                    oscar = tango == golf;
                    zulu = undefined;
                    if(oscar) { _fun59288_ip = 46; continue _fun59288 }
 40:
                    zulu = golf.joinSourceType;
 46:
                    mike = zulu;
 49:
                    zulu = tango != mike;
                    oscar = null;
                    if(!zulu) { _fun59288_ip = 61; continue _fun59288 }
 58:
                    oscar = mike;
 61:
                    mike = tango != oscar;
                    if(!mike) { _fun59288_ip = 108; continue _fun59288 }
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
                    if(mike) { _fun59288_ip = 121; continue _fun59288 }
 111:
                    zulu = report.sourceInviteCode;
                    mike = tango == zulu;
 121:
                    if(mike) { _fun59288_ip = 160; continue _fun59288 }
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
                    if(!(tango == verify)) { _fun59288_ip = 208; continue _fun59288 }
 190:
                    offset = tango == golf;
                    options = undefined;
                    if(offset) { _fun59288_ip = 205; continue _fun59288 }
 199:
                    options = golf.sourceInviteCode;
 205:
                    verify = options;
 208:
                    offset = tango != verify;
                    options = null;
                    if(!offset) { _fun59288_ip = 220; continue _fun59288 }
 217:
                    options = verify;
 220:
                    entity['sourceInviteCode'] = options;
                    entity['joinSourceType'] = oscar;
                    options = report.inviterId;
                    if(!(tango == options)) { _fun59288_ip = 258; continue _fun59288 }
 240:
                    verify = tango == golf;
                    oscar = undefined;
                    if(verify) { _fun59288_ip = 255; continue _fun59288 }
 249:
                    oscar = golf.inviterId;
 255:
                    options = oscar;
 258:
                    verify = tango != options;
                    oscar = null;
                    if(!verify) { _fun59288_ip = 270; continue _fun59288 }
 267:
                    oscar = options;
 270:
                    entity['inviterId'] = oscar;
                    report = report.integrationType;
                    if(!(tango == report)) { _fun59288_ip = 303; continue _fun59288 }
 285:
                    options = tango == golf;
                    oscar = undefined;
                    if(options) { _fun59288_ip = 300; continue _fun59288 }
 294:
                    oscar = golf.integrationType;
 300:
                    report = oscar;
 303:
                    oscar = tango != report;
                    tango = null;
                    if(!oscar) { _fun59288_ip = 315; continue _fun59288 }
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