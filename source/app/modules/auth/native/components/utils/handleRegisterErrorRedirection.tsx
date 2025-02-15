// app/modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(golf);
    options = golf.RegisterTransitionSteps;
    var _closure1_slot3 = options;
    golf = golf.RegistrationTransitionActionTypes;
    var _closure1_slot4 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.AbortCodes;
    var _closure1_slot5 = golf;
    verify = tango.Set;
    golf = verify.prototype;
    options = Object.create(golf, {constructor: {value: verify}});
    romeo = ['email', 'phoneToken'];
    foxtrot = options;
    golf = new foxtrot[verify](romeo, yankee);
    golf = golf instanceof Object ? golf : options;
    var _closure1_slot6 = golf;
    verify = tango.Set;
    golf = verify.prototype;
    options = Object.create(golf, {constructor: {value: verify}});
    romeo = ['global_name'];
    foxtrot = options;
    golf = new foxtrot[verify](romeo, yankee);
    golf = golf instanceof Object ? golf : options;
    var _closure1_slot7 = golf;
    options = tango.Set;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = ['username', 'password'];
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: handleRegisterErrorRedirection
        _fun111748: for(var _fun111748_ip = 0; ; ) switch(_fun111748_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            verify = argBaz;
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            report = 2;
            oscar = oscar[report];
            report = undefined;
            golf = golf.bind(report)(oscar);
            oscar = 'date_of_birth';
            oscar = golf.bind(report)(oscar, verify);
            romeo = null;
            if(!(romeo == oscar)) { _fun111748_ip = 769; continue _fun111748 }
 55:
            oscar = global;
            options = oscar.Number;
            golf = verify.code;
            options = options.bind(report)(golf);
            golf = _closure1_slot5;
            golf = golf.UNDER_MINIMUM_AGE;
            if(!(options !== golf)) { _fun111748_ip = 769; continue _fun111748 }
 90:
            options = oscar.Object;
            golf = options.keys;
            offset = golf.bind(options)(verify);
            options = offset.filter;
            golf = function(argFoo) {
                zulu = _closure1_slot6;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(offset)(golf);
            offset = options.length;
            golf = 0;
            if(!(!(offset > golf))) { _fun111748_ip = 623; continue _fun111748 }
 137:
            yankee = oscar.Object;
            offset = yankee.keys;
            foxtrot = offset.bind(yankee)(verify);
            yankee = foxtrot.filter;
            offset = function(argFoo) {
                zulu = _closure1_slot7;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = yankee.bind(foxtrot)(offset);
            yankee = offset.length;
            if(!(!(yankee > golf))) { _fun111748_ip = 477; continue _fun111748 }
 182:
            yankee = oscar.Object;
            oscar = yankee.keys;
            yankee = oscar.bind(yankee)(verify);
            oscar = yankee.filter;
            mike = function(argFoo) {
                zulu = _closure1_slot8;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = oscar.bind(yankee)(mike);
            mike = yankee.length;
            if(!(!(mike > golf))) { _fun111748_ip = 331; continue _fun111748 }
 224:
            mike = verify.error_code;
            mike = romeo != mike;
            if(!mike) { _fun111748_ip = 246; continue _fun111748 }
 237:
            oscar = verify.message;
            mike = romeo != oscar;
 246:
            if(!mike) { _fun111748_ip = 329; continue _fun111748 }
 249:
            mike = {};
            oscar = argCorge;
            mike['step'] = oscar;
            oscar = _closure1_slot4;
            oscar = oscar.RESPONSE_ERROR;
            mike['actionType'] = oscar;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 4;
            oscar = foxtrot[oscar];
            foxtrot = romeo.bind(report)(oscar);
            romeo = foxtrot.getCommonErrorDetails;
            oscar = verify.error_code;
            romeo = romeo.bind(foxtrot)(oscar);
            oscar = new Array(1);
            oscar[0] = romeo;
            mike['details'] = oscar;
            mike = zulu.bind(report)(mike);
 329:
            return report;
 331:
            mike = {};
            oscar = _closure1_slot3;
            oscar = oscar.ACCOUNT_INFORMATION;
            mike['step'] = oscar;
            oscar = _closure1_slot4;
            oscar = oscar.RESPONSE_ERROR;
            mike['actionType'] = oscar;
            oscar = new Array(1);
            echo = oscar;
            result = yankee;
            output = 0;
            backup = arraySpread(echo, result, output);
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            foxtrot = 4;
            foxtrot = romeo[foxtrot];
            sizing = yankee.bind(report)(foxtrot);
            kilo = sizing.getCommonErrorDetails;
            foxtrot = verify.error_code;
            foxtrot = kilo.bind(sizing)(foxtrot);
            oscar[backup] = foxtrot;
            foxtrot = 1;
            foxtrot = backup + foxtrot;
            mike['details'] = oscar;
            mike = zulu.bind(report)(mike);
            oscar = tango.navigate;
            mike = 3;
            mike = romeo[mike];
            mike = yankee.bind(report)(mike);
            mike = mike.AuthStates;
            mike = mike.REGISTER_ACCOUNT_INFORMATION;
            mike = oscar.bind(tango)(mike);
            mike = undefined;
            return mike;
 477:
            mike = {};
            oscar = _closure1_slot3;
            oscar = oscar.ACCOUNT_DISPLAY_NAME;
            mike['step'] = oscar;
            oscar = _closure1_slot4;
            oscar = oscar.RESPONSE_ERROR;
            mike['actionType'] = oscar;
            oscar = new Array(1);
            echo = oscar;
            result = offset;
            output = 0;
            foxtrot = arraySpread(echo, result, output);
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            romeo = 4;
            romeo = yankee[romeo];
            kilo = offset.bind(report)(romeo);
            backup = kilo.getCommonErrorDetails;
            romeo = verify.error_code;
            romeo = backup.bind(kilo)(romeo);
            oscar[foxtrot] = romeo;
            romeo = 1;
            romeo = foxtrot + romeo;
            mike['details'] = oscar;
            mike = zulu.bind(report)(mike);
            oscar = tango.navigate;
            mike = 3;
            mike = yankee[mike];
            mike = offset.bind(report)(mike);
            mike = mike.AuthStates;
            mike = mike.REGISTER_DISPLAY_NAME;
            mike = oscar.bind(tango)(mike);
            mike = undefined;
            return mike;
 623:
            mike = {};
            oscar = _closure1_slot3;
            oscar = oscar.ACCOUNT_IDENTITY;
            mike['step'] = oscar;
            oscar = _closure1_slot4;
            oscar = oscar.RESPONSE_ERROR;
            mike['actionType'] = oscar;
            oscar = new Array(1);
            echo = oscar;
            result = options;
            output = 0;
            offset = arraySpread(echo, result, output);
            golf = _closure1_slot0;
            options = _closure1_slot2;
            yankee = 4;
            yankee = options[yankee];
            romeo = golf.bind(report)(yankee);
            yankee = romeo.getCommonErrorDetails;
            verify = verify.error_code;
            verify = yankee.bind(romeo)(verify);
            oscar[offset] = verify;
            verify = 1;
            verify = offset + verify;
            mike['details'] = oscar;
            mike = zulu.bind(report)(mike);
            oscar = tango.navigate;
            mike = 3;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            mike = mike.AuthStates;
            mike = mike.REGISTER_IDENTITY;
            mike = oscar.bind(tango)(mike);
            mike = undefined;
            return mike;
 769:
            mike = {};
            oscar = _closure1_slot3;
            oscar = oscar.AGE_GATE_UNDERAGE;
            mike['step'] = oscar;
            oscar = _closure1_slot4;
            oscar = oscar.VIEWED;
            mike['actionType'] = oscar;
            mike = zulu.bind(report)(mike);
            zulu = tango.push;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 3;
            entity = oscar[entity];
            entity = mike.bind(report)(entity);
            entity = entity.AuthStates;
            mike = entity.AGE_GATE_UNDERAGE;
            entity = {'fromRegister': true, 'disableSwipe': true};
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();