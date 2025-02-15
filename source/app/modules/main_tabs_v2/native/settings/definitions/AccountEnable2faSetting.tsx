// app/modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    golf = true;
    mike['value'] = golf;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.MobileSetting;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RendererType;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    offset = mike.AbortCodes;
    var _closure1_slot4 = offset;
    mike = mike.NOOP_NULL;
    var _closure1_slot5 = mike;
    mike = {};
    verify = verify.PRESSABLE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 6;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.cDgKtb;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    options = options.ACCOUNT;
    mike['parent'] = options;
    options = function() { // Original name: onAccountEnable2FASettingPress
        _fun94527: for(var _fun94527_ip = 0; ; ) switch(_fun94527_ip) {
 0:
            mike = _closure1_slot3;
            entity = mike.getCurrentUser;
            tango = entity.bind(mike)();
            zulu = null;
            oscar = zulu == tango;
            entity = undefined;
            mike = undefined;
            if(oscar) { _fun94527_ip = 35; continue _fun94527 }
 29:
            mike = tango.verified;
 35:
            if(!(zulu != mike)) { _fun94527_ip = 45; continue _fun94527 }
 39:
            if(mike) { _fun94527_ip = 183; continue _fun94527 }
 45:
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 5;
            mike = verify[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.show;
            mike = {};
            options = _closure1_slot0;
            report = 6;
            oscar = verify[report];
            oscar = options.bind(entity)(oscar);
            offset = oscar.intl;
            golf = offset.string;
            oscar = verify[report];
            oscar = options.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.v740sr;
            oscar = golf.bind(offset)(oscar);
            mike['title'] = oscar;
            oscar = verify[report];
            oscar = options.bind(entity)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(entity)(report);
            report = report.t;
            report = report.uggF7u;
            report = oscar.bind(golf)(report);
            mike['body'] = report;
            mike = zulu.bind(tango)(mike);
            _fun94527_ip = 196; continue _fun94527;
 183:
            mike = function() { // Original name: goToAdd2FA
                mike = null;
                var _closure3_slot0 = mike;
                zulu = {};
                mike = function(argFoo) { // Original name: onSubmit
                    zulu = argFoo;
                    _closure3_slot0 = zulu;
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    entity = mike.enableMFAStart;
                    entity = entity.bind(mike)(zulu);
                    return entity;
                };
                zulu['onSubmit'] = mike;
                entity = function(argFoo) { // Original name: onError
                    _fun94530: for(var _fun94530_ip = 0; ; ) switch(_fun94530_ip) {
 0:
                        entity = argFoo;
                        entity = entity.body;
                        zulu = entity.code;
                        mike = _closure1_slot4;
                        mike = mike.MFA_INVALID_SECRET;
                        mike = zulu === mike;
                        if(!mike) { _fun94530_ip = 46; continue _fun94530 }
 33:
                        tango = _closure3_slot0;
                        zulu = null;
                        mike = zulu != tango;
 46:
                        if(!mike) { _fun94530_ip = 118; continue _fun94530 }
 49:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 8;
                        entity = tango[entity];
                        mike = undefined;
                        oscar = zulu.bind(mike)(entity);
                        report = oscar.open;
                        entity = {};
                        golf = _closure3_slot0;
                        entity['password'] = golf;
                        entity = report.bind(oscar)(entity);
                        entity = 5;
                        entity = tango[entity];
                        mike = zulu.bind(mike)(entity);
                        entity = mike.close;
                        entity = entity.bind(mike)();
 118:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['onError'] = entity;
                entity = _closure1_slot5;
                zulu['onSuccess'] = entity;
                options = _closure1_slot0;
                report = _closure1_slot2;
                tango = 6;
                oscar = report[tango];
                entity = undefined;
                oscar = options.bind(entity)(oscar);
                verify = oscar.intl;
                golf = verify.string;
                oscar = report[tango];
                oscar = options.bind(entity)(oscar);
                oscar = oscar.t;
                oscar = oscar.CIGa+/;
                oscar = golf.bind(verify)(oscar);
                zulu['placeholder'] = oscar;
                oscar = report[tango];
                oscar = options.bind(entity)(oscar);
                golf = oscar.intl;
                oscar = golf.string;
                tango = report[tango];
                tango = options.bind(entity)(tango);
                tango = tango.t;
                tango = tango.cDgKtb;
                oscar = oscar.bind(golf)(tango);
                tango = oscar.toUpperCase;
                tango = tango.bind(oscar)();
                zulu['title'] = tango;
                tango = true;
                zulu['closeOnSuccess'] = tango;
                tango = _closure1_slot1;
                oscar = 9;
                oscar = report[oscar];
                oscar = tango.bind(entity)(oscar);
                oscar = oscar.Colors;
                oscar = oscar.BRAND;
                zulu['confirmColor'] = oscar;
                mike = _closure1_slot4;
                mike = mike.MFA_INVALID_SECRET;
                zulu['skipErrorMsgAbortCode'] = mike;
                mike = 10;
                mike = report[mike];
                mike = tango.bind(entity)(mike);
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            mike = mike.bind(entity)();
 196:
            return entity;
        }
    };
    mike['onPress'] = options;
    mike['withArrow'] = golf;
    tango = function() { // Original name: useHasAccountEnable2FASetting
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.useIsTOTPEnabled;
        entity = entity.bind(mike)();
        entity = !entity;
        return entity;
    };
    mike['usePredicate'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();