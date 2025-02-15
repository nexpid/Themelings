// app/modules/auth/native/components/utils/useWithPostLoginRouting.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.LoginStates;
    var _closure1_slot7 = golf;
    tango = tango.AuthStates;
    var _closure1_slot8 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth/native/components/utils/useWithPostLoginRouting.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useWithPostLoginRouting
        verify = argFoo;
        options = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = options;
        report = _closure1_slot5;
        entity = report.useState;
        golf = entity.bind(report)();
        oscar = _closure1_slot4;
        entity = undefined;
        tango = 2;
        golf = oscar.bind(entity)(golf, tango);
        tango = 0;
        oscar = golf[tango];
        var _closure2_slot2 = oscar;
        tango = 1;
        tango = golf[tango];
        var _closure2_slot3 = tango;
        golf = _closure1_slot0;
        offset = _closure1_slot2;
        tango = 5;
        tango = offset[tango];
        offset = golf.bind(entity)(tango);
        golf = offset.useStateFromStoresObject;
        zulu = _closure1_slot6;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            entity = {};
            zulu = _closure1_slot6;
            mike = zulu.getLoginStatus;
            mike = mike.bind(zulu)();
            entity['loginStatus'] = mike;
            return entity;
        };
        zulu = golf.bind(offset)(tango, zulu);
        golf = zulu.loginStatus;
        var _closure2_slot4 = golf;
        tango = report.useEffect;
        zulu = new Array(4);
        zulu[0] = verify;
        zulu[1] = options;
        zulu[2] = golf;
        zulu[3] = oscar;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot2;
                mike = _closure1_slot7;
                mike = mike.LOGGING_IN;
                if(!(zulu !== mike)) { _fun00002_ip = 64; continue _fun00001 }
 26:
                zulu = _closure2_slot2;
                mike = _closure1_slot7;
                mike = mike.FORGOT_PASSWORD;
                if(!(zulu !== mike)) { _fun00002_ip = 64; continue _fun00001 }
 44:
                tango = _closure2_slot3;
                zulu = _closure2_slot4;
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                _fun00002_ip = 700; continue _fun00001;
 64:
                zulu = _closure2_slot4;
                mike = _closure1_slot7;
                mike = mike.MFA_STEP;
                if(!(mike !== zulu)) { _fun00002_ip = 198; continue _fun00001 }
 82:
                mike = _closure1_slot7;
                mike = mike.ACCOUNT_SCHEDULED_FOR_DELETION;
                if(!(mike !== zulu)) { _fun00002_ip = 160; continue _fun00001 }
 96:
                mike = _closure1_slot7;
                mike = mike.ACCOUNT_DISABLED;
                if(!(mike !== zulu)) { _fun00002_ip = 160; continue _fun00001 }
 110:
                mike = _closure1_slot7;
                mike = mike.LOGIN_AGE_GATE;
                if(!(mike === zulu)) { _fun00002_ip = 222; continue _fun00001 }
 124:
                report = _closure2_slot0;
                tango = report.push;
                mike = _closure1_slot8;
                zulu = mike.AGE_GATE_UNDERAGE;
                mike = {};
                golf = true;
                mike['existingUser'] = golf;
                mike = tango.bind(report)(zulu, mike);
                _fun00002_ip = 222; continue _fun00001;
 160:
                report = _closure2_slot0;
                tango = report.push;
                mike = _closure1_slot8;
                zulu = mike.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
                mike = {};
                golf = _closure2_slot1;
                mike['handleLogin'] = golf;
                mike = tango.bind(report)(zulu, mike);
                _fun00002_ip = 222; continue _fun00001;
 198:
                tango = _closure2_slot0;
                zulu = tango.push;
                mike = _closure1_slot8;
                mike = mike.MFA;
                mike = zulu.bind(tango)(mike);
 222:
                zulu = _closure2_slot4;
                mike = _closure1_slot7;
                mike = mike.PASSWORD_RECOVERY_PHONE_VERIFICATION;
                if(!(mike !== zulu)) { _fun00002_ip = 500; continue _fun00001 }
 243:
                mike = _closure1_slot7;
                mike = mike.PHONE_IP_AUTHORIZATION;
                if(!(mike === zulu)) { _fun00002_ip = 685; continue _fun00001 }
 260:
                verify = _closure1_slot6;
                mike = verify.getCredentials;
                mike = mike.bind(verify)();
                zulu = mike.login;
                var _closure3_slot0 = zulu;
                mike = mike.password;
                var _closure3_slot1 = mike;
                report = _closure2_slot0;
                tango = report.push;
                mike = _closure1_slot8;
                zulu = mike.VERIFY_PHONE;
                mike = {};
                foxtrot = _closure1_slot0;
                backup = _closure1_slot2;
                golf = 6;
                yankee = backup[golf];
                offset = undefined;
                yankee = foxtrot.bind(offset)(yankee);
                kilo = yankee.intl;
                romeo = kilo.string;
                yankee = backup[golf];
                yankee = foxtrot.bind(offset)(yankee);
                yankee = yankee.t;
                yankee = yankee.w55Ocn;
                yankee = romeo.bind(kilo)(yankee);
                mike['title'] = yankee;
                yankee = backup[golf];
                yankee = foxtrot.bind(offset)(yankee);
                romeo = yankee.intl;
                yankee = romeo.string;
                golf = backup[golf];
                golf = foxtrot.bind(offset)(golf);
                golf = golf.t;
                golf = golf.0/ALaG;
                golf = yankee.bind(romeo)(golf);
                mike['description'] = golf;
                golf = verify.getCredentials;
                golf = golf.bind(verify)();
                golf = golf.login;
                mike['phone'] = golf;
                verify = _closure1_slot3;
                golf = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00004_ip = 145; continue _fun00003 }
 10:
                            tango = _closure1_slot1;
                            zulu = _closure1_slot2;
                            mike = 8;
                            mike = zulu[mike];
                            zulu = undefined;
                            report = tango.bind(zulu)(mike);
                            tango = report.authorizeIPAddress;
                            mike = argFoo;
                            mike = tango.bind(report)(mike);
                            SaveGenerator(address=53);
 51:
                            return mike;
 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun00004_ip = 142; continue _fun00003 }
 59:
                            oscar = _closure2_slot0;
                            report = oscar.getState;
                            report = report.bind(oscar)();
                            golf = report.routes;
                            oscar = golf.findIndex;
                            report = function(argFoo) {
                                entity = argFoo;
                                mike = entity.name;
                                entity = _closure1_slot8;
                                entity = entity.LOGIN;
                                entity = mike === entity;
                                return entity;
                            };
                            oscar = oscar.bind(golf)(report);
                            report = 0;
                            if(!(!(oscar >= report))) { _fun00004_ip = 124; continue _fun00003 }
 108:
                            golf = _closure2_slot0;
                            report = golf.pop;
                            report = report.bind(golf)();
                            _fun00004_ip = 139; continue _fun00003;
 124:
                            report = _closure2_slot0;
                            tango = report.pop;
                            tango = tango.bind(report)(oscar);
 139:
                            return zulu;
 142:
                            return mike;
 145:
                            return entity;
                        }
                    };
                    return entity;
                };
                golf = verify.bind(offset)(golf);
                var _closure3_slot2 = golf;
                golf = function() {
                    entity = undefined;
                    tango = _closure3_slot2;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                mike['onPhoneTokenReceived'] = golf;
                golf = function(argFoo) { // Original name: onClose
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        if(entity) { _fun00006_ip = 43; continue _fun00005 }
 6:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.loginReset;
                        entity = entity.bind(mike)();
                        _fun00006_ip = 97; continue _fun00005;
 43:
                        zulu = _closure3_slot1;
                        mike = null;
                        mike = mike != zulu;
                        if(!mike) { _fun00006_ip = 71; continue _fun00005 }
 59:
                        tango = _closure3_slot1;
                        zulu = '';
                        mike = zulu !== tango;
 71:
                        if(!mike) { _fun00006_ip = 97; continue _fun00005 }
 74:
                        tango = _closure2_slot1;
                        zulu = _closure3_slot0;
                        mike = _closure3_slot1;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
 97:
                        entity = undefined;
                        return entity;
                    }
                };
                mike['onClose'] = golf;
                mike = tango.bind(report)(zulu, mike);
                _fun00002_ip = 685; continue _fun00001;
 500:
                zulu = _closure1_slot6;
                mike = zulu.getCredentials;
                mike = mike.bind(zulu)();
                golf = mike.login;
                report = _closure2_slot0;
                tango = report.replace;
                mike = _closure1_slot8;
                zulu = mike.VERIFY_PHONE;
                mike = {};
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                options = 6;
                verify = foxtrot[options];
                yankee = undefined;
                verify = romeo.bind(yankee)(verify);
                backup = verify.intl;
                offset = backup.string;
                verify = foxtrot[options];
                verify = romeo.bind(yankee)(verify);
                verify = verify.t;
                verify = verify.+xqy3d;
                verify = offset.bind(backup)(verify);
                mike['title'] = verify;
                verify = foxtrot[options];
                verify = romeo.bind(yankee)(verify);
                offset = verify.intl;
                verify = offset.string;
                options = foxtrot[options];
                options = romeo.bind(yankee)(options);
                options = options.t;
                options = options.myKyqq;
                options = verify.bind(offset)(options);
                mike['description'] = options;
                mike['phone'] = golf;
                golf = function(argFoo) { // Original name: onPhoneTokenReceived
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 7;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = argFoo;
                    oscar = tango.bind(entity)(zulu);
                    report = _closure2_slot0;
                    tango = report.replace;
                    mike = _closure1_slot8;
                    zulu = mike.EXTERNAL_LINK;
                    mike = {};
                    mike['externalURL'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                mike['onPhoneTokenReceived'] = golf;
                oscar = function() { // Original name: onClose
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.loginReset;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                mike['onClose'] = oscar;
                mike = tango.bind(report)(zulu, mike);
 685:
                zulu = _closure2_slot3;
                mike = _closure2_slot4;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 700:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();