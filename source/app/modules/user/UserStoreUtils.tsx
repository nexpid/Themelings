// app/modules/user/UserStoreUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: getEnv
        _fun37043: for(var _fun37043_ip = 0; ; ) switch(_fun37043_ip) {
 0:
            mike = argFoo;
            entity = _closure1_slot3;
            zulu = entity.TEST;
            tango = 'production';
            entity = tango;
            if(!(tango === zulu)) { _fun37043_ip = 42; continue _fun37043 }
 27:
            zulu = null;
            zulu = zulu != mike;
            entity = tango;
            if(!zulu) { _fun37043_ip = 42; continue _fun37043 }
 39:
            entity = mike;
 42:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = report.Environments;
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.PREMIUM_TYPE_NONE;
    var _closure1_slot4 = options;
    report = report.UserFlags;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/user/UserStoreUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: validatePremiumType
        _fun37044: for(var _fun37044_ip = 0; ; ) switch(_fun37044_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            if(entity) { _fun37044_ip = 15; continue _fun37044 }
 9:
            zulu = undefined;
            entity = zulu === mike;
 15:
            if(entity) { _fun37044_ip = 62; continue _fun37044 }
 18:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = argBaz;
            mike = entity === mike;
            entity = 'Premium type should not change for non-staff users';
            entity = zulu.bind(tango)(mike, entity);
 62:
            entity = undefined;
            return entity;
        }
    };
    zulu['validatePremiumType'] = report;
    zulu['getEnv'] = tango;
    tango = function(argFoo) { // Original name: isStaffEnv
        _fun37045: for(var _fun37045_ip = 0; ; ) switch(_fun37045_ip) {
 0:
            report = argFoo;
            tango = arguments[1];
            zulu = undefined;
            if(!(tango === zulu)) { _fun37045_ip = 14; continue _fun37045 }
 12:
            tango = undefined;
 14:
            entity = _closure1_slot6;
            zulu = entity.bind(zulu)(tango);
            entity = _closure1_slot3;
            entity = entity.DEVELOPMENT;
            entity = zulu === entity;
            if(entity) { _fun37045_ip = 77; continue _fun37045 }
 43:
            zulu = global;
            zulu = zulu.window;
            zulu = zulu.GLOBAL_ENV;
            zulu = zulu.RELEASE_CHANNEL;
            mike = _closure1_slot3;
            mike = mike.STAGING;
            entity = zulu === mike;
 77:
            if(entity) { _fun37045_ip = 118; continue _fun37045 }
 80:
            mike = null;
            mike = mike != report;
            if(!mike) { _fun37045_ip = 115; continue _fun37045 }
 89:
            zulu = report.isStaff;
            zulu = zulu.bind(report)();
            if(zulu) { _fun37045_ip = 112; continue _fun37045 }
 102:
            tango = report.isStaffPersonal;
            zulu = tango.bind(report)();
 112:
            mike = zulu;
 115:
            entity = mike;
 118:
            return entity;
        }
    };
    zulu['isStaffEnv'] = tango;
    tango = function(argFoo) { // Original name: isStaffEnvRawData
        _fun37046: for(var _fun37046_ip = 0; ; ) switch(_fun37046_ip) {
 0:
            tango = argFoo;
            mike = arguments[1];
            verify = undefined;
            if(!(mike === verify)) { _fun37046_ip = 14; continue _fun37046 }
 12:
            mike = undefined;
 14:
            entity = _closure1_slot6;
            mike = entity.bind(verify)(mike);
            entity = _closure1_slot3;
            entity = entity.DEVELOPMENT;
            mike = mike !== entity;
            if(!mike) { _fun37046_ip = 77; continue _fun37046 }
 43:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            report = entity.RELEASE_CHANNEL;
            entity = _closure1_slot3;
            entity = entity.STAGING;
            mike = report !== entity;
 77:
            entity = !mike;
            if(!mike) { _fun37046_ip = 176; continue _fun37046 }
 83:
            report = null;
            mike = report != tango;
            if(!mike) { _fun37046_ip = 173; continue _fun37046 }
 92:
            oscar = tango.flags;
            oscar = report == oscar;
            if(oscar) { _fun37046_ip = 154; continue _fun37046 }
 104:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 3;
            golf = offset[golf];
            verify = options.bind(verify)(golf);
            options = verify.hasFlag;
            golf = tango.flags;
            zulu = _closure1_slot5;
            zulu = zulu.STAFF;
            zulu = options.bind(verify)(golf, zulu);
            oscar = !zulu;
 154:
            zulu = !oscar;
            if(!oscar) { _fun37046_ip = 170; continue _fun37046 }
 160:
            tango = tango.personal_connection_id;
            zulu = report != tango;
 170:
            mike = zulu;
 173:
            entity = mike;
 176:
            return entity;
        }
    };
    zulu['isStaffEnvRawData'] = tango;
    mike = function(argFoo) { // Original name: getPremiumTypeFromRawValue
        _fun37047: for(var _fun37047_ip = 0; ; ) switch(_fun37047_ip) {
 0:
            mike = argFoo;
            entity = undefined;
            if(!(entity !== mike)) { _fun37047_ip = 22; continue _fun37047 }
 9:
            zulu = _closure1_slot4;
            entity = null;
            if(!(mike !== zulu)) { _fun37047_ip = 25; continue _fun37047 }
 22:
            entity = mike;
 25:
            return entity;
        }
    };
    zulu['getPremiumTypeFromRawValue'] = mike;
    return entity;
})();