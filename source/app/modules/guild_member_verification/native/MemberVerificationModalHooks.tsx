// app/modules/guild_member_verification/native/MemberVerificationModalHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    offset = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    tango = function() { // Original name: useUserVerificationState
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStoresObject;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun88457: for(var _fun88457_ip = 0; ; ) switch(_fun88457_ip) {
 0:
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                oscar = entity.bind(mike)();
                entity = {};
                report = _closure1_slot0;
                mike = _closure1_slot1;
                golf = 4;
                mike = mike[golf];
                tango = undefined;
                mike = report.bind(tango)(mike);
                mike = mike.UserVerificationFieldPlatforms;
                options = mike.EMAIL;
                mike = null;
                report = mike == oscar;
                verify = undefined;
                if(report) { _fun88457_ip = 69; continue _fun88457 }
 63:
                verify = oscar.verified;
 69:
                report = mike != verify;
                if(!report) { _fun88457_ip = 79; continue _fun88457 }
 76:
                report = verify;
 79:
                entity[options] = report;
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[golf];
                zulu = report.bind(tango)(zulu);
                zulu = zulu.UserVerificationFieldPlatforms;
                zulu = zulu.PHONE;
                report = mike == oscar;
                tango = undefined;
                if(report) { _fun88457_ip = 132; continue _fun88457 }
 122:
                report = oscar.isPhoneVerified;
                tango = report.bind(oscar)();
 132:
                mike = mike != tango;
                if(!mike) { _fun88457_ip = 142; continue _fun88457 }
 139:
                mike = tango;
 142:
                entity[zulu] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = tango;
    mike = function(argFoo) { // Original name: useInitialVerification
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getInitialVerificationState;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    var _closure1_slot7 = mike;
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    verify = options[entity];
    oscar = argCorge;
    entity = undefined;
    oscar = oscar.bind(entity)(verify);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    verify = options[oscar];
    verify = offset.bind(entity)(verify);
    var _closure1_slot4 = verify;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.setInitialVerification;
    var _closure1_slot5 = oscar;
    oscar = 5;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_member_verification/native/MemberVerificationModalHooks.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: useSetInitialVerificationEffect
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        entity = {};
        tango = _closure1_slot7;
        report = undefined;
        tango = tango.bind(report)(oscar);
        entity['initial'] = tango;
        tango = _closure1_slot6;
        tango = tango.bind(report)();
        entity['current'] = tango;
        var _closure2_slot1 = entity;
        report = _closure1_slot2;
        zulu = report.useRef;
        zulu = zulu.bind(report)(entity);
        var _closure2_slot2 = zulu;
        tango = report.useEffect;
        zulu = function() {
            mike = _closure2_slot2;
            entity = _closure2_slot1;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        zulu = tango.bind(report)(zulu);
        tango = report.useEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun88462: for(var _fun88462_ip = 0; ; ) switch(_fun88462_ip) {
 0:
                mike = _closure2_slot2;
                mike = mike.current;
                tango = mike.current;
                zulu = mike.initial;
                mike = null;
                if(!(mike == zulu)) { _fun88462_ip = 48; continue _fun88462 }
 29:
                zulu = _closure1_slot5;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike, tango);
 48:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        entity = entity.initial;
        return entity;
    };
    zulu['useSetInitialVerificationEffect'] = report;
    zulu['useUserVerificationState'] = tango;
    zulu['useInitialVerification'] = mike;
    return entity;
})();