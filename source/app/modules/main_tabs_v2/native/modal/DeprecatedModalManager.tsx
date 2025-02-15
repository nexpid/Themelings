// app/modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124678: for(var _fun124678_ip = 0; ; ) switch(_fun124678_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot19;
            entity = entity.bind(zulu)();
            if(entity) { _fun124678_ip = 51; continue _fun124678 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124678_ip = 92; continue _fun124678;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124678_ip = 71; continue _fun124678 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124679: for(var _fun124679_ip = 0; ; ) switch(_fun124679_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun124679_ip = 76; continue _fun124679;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: handlePushedModal
        _fun124682: for(var _fun124682_ip = 0; ; ) switch(_fun124682_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getRootNavigationRef;
            tango = mike.bind(zulu)();
            mike = null;
            if(!(mike != tango)) { _fun124682_ip = 86; continue _fun124682 }
 44:
            zulu = tango.navigate;
            mike = {};
            report = 'modal';
            mike['name'] = report;
            report = oscar.key;
            mike['key'] = report;
            report = {};
            report['modal'] = oscar;
            mike['params'] = report;
            mike = zulu.bind(tango)(mike);
 86:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: handlePoppedModal
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 13;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.popModal;
        mike = mike.bind(zulu)();
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: createPushModalHandler
        zulu = 0;
        mike = copyRestArgs(zulu);
        var _closure2_slot0 = mike;
        entity = function() {
            _fun124685: for(var _fun124685_ip = 0; ; ) switch(_fun124685_ip) {
 0:
                oscar = _closure2_slot0;
                entity = oscar.length;
                report = 0;
                tango = report < entity;
                zulu = null;
                entity = undefined;
                if(!tango) { _fun124685_ip = 90; continue _fun124685 }
 28:
                golf = oscar[report];
                options = zulu == golf;
                tango = undefined;
                if(options) { _fun124685_ip = 71; continue _fun124685 }
 41:
                options = golf.isOpen;
                options = zulu == options;
                tango = undefined;
                if(options) { _fun124685_ip = 71; continue _fun124685 }
 56:
                verify = golf.isOpen;
                options = _closure1_slot15;
                tango = verify.bind(golf)(options);
 71:
                if(!(zulu != tango)) { _fun124685_ip = 92; continue _fun124685 }
 75:
                if(tango) { _fun124685_ip = 92; continue _fun124685 }
 78:
                report = report + 1;
                tango = oscar.length;
                if(report < tango) { _fun124685_ip = 28; continue _fun124685 }
 90:
                return entity;
 92:
                tango = golf.getComponent;
                oscar = tango.bind(golf)();
                tango = golf.store;
                report = zulu == tango;
                zulu = undefined;
                if(report) { _fun124685_ip = 123; continue _fun124685 }
 117:
                zulu = tango.getProps;
 123:
                tango = 'function';
                zulu = typeof zulu;
                if(!(tango !== zulu)) { _fun124685_ip = 138; continue _fun124685 }
 134:
                report = {};
                _fun124685_ip = 154; continue _fun124685;
 138:
                tango = golf.store;
                zulu = tango.getProps;
                report = zulu.bind(tango)();
 154:
                zulu = _closure1_slot20;
                tango = _closure1_slot1;
                options = _closure1_slot2;
                mike = 14;
                mike = options[mike];
                tango = tango.bind(entity)(mike);
                mike = {};
                golf = golf.key;
                mike['key'] = golf;
                mike = tango.bind(entity)(oscar, mike, report);
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot22 = entity;
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    var _closure1_slot13 = options;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.UserRequiredActions;
    var _closure1_slot14 = verify;
    tango = tango.AppContext;
    tango = tango.APP;
    var _closure1_slot15 = tango;
    tango = {'key': 'EMAIL_VERIFICATION_MODAL_OPEN', 'store': null, 'closable': false, 'center': true};
    tango['store'] = options;
    verify = function() { // Original name: isOpen
        _fun124686: for(var _fun124686_ip = 0; ; ) switch(_fun124686_ip) {
 0:
            zulu = _closure1_slot13;
            entity = zulu.getAction;
            zulu = entity.bind(zulu)();
            entity = _closure1_slot14;
            entity = entity.REQUIRE_CAPTCHA;
            entity = zulu === entity;
            if(entity) { _fun124686_ip = 62; continue _fun124686 }
 34:
            tango = _closure1_slot13;
            zulu = tango.getAction;
            tango = zulu.bind(tango)();
            zulu = _closure1_slot14;
            zulu = zulu.REQUIRE_VERIFIED_EMAIL;
            entity = tango === zulu;
 62:
            if(entity) { _fun124686_ip = 93; continue _fun124686 }
 65:
            tango = _closure1_slot13;
            zulu = tango.getAction;
            tango = zulu.bind(tango)();
            zulu = _closure1_slot14;
            zulu = zulu.REQUIRE_VERIFIED_PHONE;
            entity = tango === zulu;
 93:
            if(entity) { _fun124686_ip = 124; continue _fun124686 }
 96:
            tango = _closure1_slot13;
            zulu = tango.getAction;
            tango = zulu.bind(tango)();
            zulu = _closure1_slot14;
            zulu = zulu.REQUIRE_REVERIFIED_PHONE;
            entity = tango === zulu;
 124:
            if(entity) { _fun124686_ip = 155; continue _fun124686 }
 127:
            tango = _closure1_slot13;
            zulu = tango.getAction;
            tango = zulu.bind(tango)();
            zulu = _closure1_slot14;
            zulu = zulu.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            entity = tango === zulu;
 155:
            if(entity) { _fun124686_ip = 186; continue _fun124686 }
 158:
            tango = _closure1_slot13;
            zulu = tango.getAction;
            tango = zulu.bind(tango)();
            zulu = _closure1_slot14;
            zulu = zulu.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            entity = tango === zulu;
 186:
            if(entity) { _fun124686_ip = 236; continue _fun124686 }
 189:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 15;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.isEmailReverification;
            oscar = _closure1_slot13;
            zulu = oscar.getAction;
            zulu = zulu.bind(oscar)();
            entity = tango.bind(report)(zulu);
 236:
            if(!entity) { _fun124686_ip = 259; continue _fun124686 }
 239:
            zulu = _closure1_slot9;
            mike = zulu.getToken;
            zulu = mike.bind(zulu)();
            mike = null;
            entity = mike != zulu;
 259:
            return entity;
        }
    };
    tango['isOpen'] = verify;
    verify = function() { // Original name: getComponent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 16;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.default;
        return entity;
    };
    tango['getComponent'] = verify;
    var _closure1_slot16 = tango;
    tango = {'key': 'USER_REQUIRED_ACTION_UPDATE', 'store': null, 'center': true};
    tango['store'] = options;
    options = function() { // Original name: isOpen
        zulu = _closure1_slot13;
        mike = zulu.getAction;
        mike = mike.bind(zulu)();
        entity = _closure1_slot14;
        entity = entity.AGREEMENTS;
        entity = mike === entity;
        return entity;
    };
    tango['isOpen'] = options;
    options = function() { // Original name: getComponent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 17;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.default;
        return entity;
    };
    tango['getComponent'] = options;
    var _closure1_slot17 = tango;
    tango = 22;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: DeprecatedModalManager
            report = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot4;
            tango = _closure2_slot0;
            oscar = undefined;
            entity = entity.bind(oscar)(report, tango);
            mike = _closure1_slot18;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = mike.bind(oscar)(report, tango, entity);
            mike = {};
            report = _closure1_slot22;
            options = _closure1_slot17;
            tango = _closure1_slot16;
            options = report.bind(oscar)(options, tango);
            mike['CONNECTION_OPEN_SUPPLEMENTAL'] = options;
            tango = report.bind(oscar)(tango);
            mike['EMAIL_VERIFICATION_MODAL_OPEN'] = tango;
            tango = function(argFoo) { // Original name: USER_REQUIRED_ACTION_UPDATE
                _fun124692: for(var _fun124692_ip = 0; ; ) switch(_fun124692_ip) {
 0:
                    tango = argFoo;
                    oscar = _closure1_slot22;
                    report = _closure1_slot17;
                    zulu = _closure1_slot16;
                    entity = undefined;
                    zulu = oscar.bind(entity)(report, zulu);
                    oscar = tango.requiredAction;
                    report = null;
                    if(!(report != oscar)) { _fun124692_ip = 60; continue _fun124692 }
 38:
                    tango = tango.requiredAction;
                    if(!(report != tango)) { _fun124692_ip = 191; continue _fun124692 }
 51:
                    zulu = zulu.bind(entity)();
                    _fun124692_ip = 191; continue _fun124692;
 60:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    report = 13;
                    zulu = zulu[report];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isModalOpen;
                    oscar = 'USER_REQUIRED_ACTION_UPDATE';
                    zulu = zulu.bind(tango)(oscar);
                    if(!zulu) { _fun124692_ip = 126; continue _fun124692 }
 98:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.popModal;
                    zulu = zulu.bind(tango)(oscar);
 126:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    oscar = tango.bind(entity)(zulu);
                    zulu = oscar.isModalOpen;
                    tango = 'EMAIL_VERIFICATION_MODAL_OPEN';
                    zulu = zulu.bind(oscar)(tango);
                    if(!zulu) { _fun124692_ip = 191; continue _fun124692 }
 163:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[report];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.popModal;
                    mike = mike.bind(zulu)(tango);
 191:
                    return entity;
                }
            };
            mike['USER_REQUIRED_ACTION_UPDATE'] = tango;
            tango = {'key': 'CHANNEL_SETTINGS_OPEN', 'store': null, 'closable': false};
            options = _closure1_slot10;
            tango['store'] = options;
            options = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 18;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            tango['getComponent'] = options;
            tango = report.bind(oscar)(tango);
            mike['CHANNEL_SETTINGS_OPEN'] = tango;
            tango = {'key': 'GUILD_SETTINGS_OPEN', 'store': null, 'closable': false};
            options = _closure1_slot8;
            tango['store'] = options;
            options = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            tango['getComponent'] = options;
            tango = report.bind(oscar)(tango);
            mike['GUILD_SETTINGS_OPEN'] = tango;
            tango = {'key': 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'store': null, 'closable': false};
            options = _closure1_slot12;
            tango['store'] = options;
            options = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            tango['getComponent'] = options;
            tango = report.bind(oscar)(tango);
            mike['NOTIFICATION_SETTINGS_MODAL_OPEN'] = tango;
            tango = {'key': 'CREATE_INVITE_MODAL_OPEN', 'store': null, 'closable': false};
            options = _closure1_slot11;
            tango['store'] = options;
            golf = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 21;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            tango['getComponent'] = golf;
            tango = report.bind(oscar)(tango);
            mike['CREATE_INVITE_MODAL_OPEN'] = tango;
            zulu = _closure1_slot21;
            mike['GUILD_SETTINGS_CLOSE'] = zulu;
            mike['USER_SETTINGS_MODAL_CLOSE'] = zulu;
            mike['CHANNEL_SETTINGS_CLOSE'] = zulu;
            mike['NOTIFICATION_SETTINGS_MODAL_CLOSE'] = zulu;
            mike['PREMIUM_PAYMENT_MODAL_CLOSE'] = zulu;
            mike['EMAIL_VERIFICATION_MODAL_CLOSE'] = zulu;
            mike['CREATE_INVITE_MODAL_CLOSE'] = zulu;
            mike['QUICKSWITCHER_HIDE'] = zulu;
            mike['IFE_EXPERIMENT_SEARCH_MODAL_CLOSE'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();