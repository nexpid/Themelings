// app/modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: handlePushedModal
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getRootNavigationRef;
            tangon = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != tangon)) { _fun00004_ip = 86; continue _fun00003 }
 44:
            zuuluu = tangon.navigate;
            michal = {};
            report = 'modal';
            michal['name'] = report;
            report = oscard.key;
            michal['key'] = report;
            report = {};
            report['modal'] = oscard;
            michal['params'] = report;
            michal = zuuluu.bind(tangon)(michal);
 86:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: handlePoppedModal
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.popModal;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: createPushModalHandler
        zuuluu = 0;
        michal = copyRestArgs(zuuluu);
        var _closure2_slot0 = michal;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscard = _closure2_slot0;
                entity = oscard.length;
                report = 0;
                tangon = report < entity;
                zuuluu = null;
                entity = undefined;
                if(!tangon) { _fun00006_ip = 90; continue _fun00005 }
 28:
                golfie = oscard[report];
                option = zuuluu == golfie;
                tangon = undefined;
                if(option) { _fun00006_ip = 71; continue _fun00005 }
 41:
                option = golfie.isOpen;
                option = zuuluu == option;
                tangon = undefined;
                if(option) { _fun00006_ip = 71; continue _fun00005 }
 56:
                verify = golfie.isOpen;
                option = _closure1_slot15;
                tangon = verify.bind(golfie)(option);
 71:
                if(!(zuuluu != tangon)) { _fun00006_ip = 92; continue _fun00005 }
 75:
                if(tangon) { _fun00006_ip = 92; continue _fun00005 }
 78:
                report = report + 1;
                tangon = oscard.length;
                if(report < tangon) { _fun00006_ip = 28; continue _fun00005 }
 90:
                return entity;
 92:
                tangon = golfie.getComponent;
                oscard = tangon.bind(golfie)();
                tangon = golfie.store;
                report = zuuluu == tangon;
                zuuluu = undefined;
                if(report) { _fun00006_ip = 123; continue _fun00005 }
 117:
                zuuluu = tangon.getProps;
 123:
                tangon = 'function';
                zuuluu = typeof zuuluu;
                if(!(tangon !== zuuluu)) { _fun00006_ip = 138; continue _fun00005 }
 134:
                report = {};
                _fun00006_ip = 154; continue _fun00005;
 138:
                tangon = golfie.store;
                zuuluu = tangon.getProps;
                report = zuuluu.bind(tangon)();
 154:
                zuuluu = _closure1_slot19;
                tangon = _closure1_slot1;
                option = _closure1_slot2;
                michal = 14;
                michal = option[michal];
                tangon = tangon.bind(entity)(michal);
                michal = {};
                golfie = golfie.key;
                michal['key'] = golfie;
                michal = tangon.bind(entity)(oscard, michal, report);
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot21 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    var _closure1_slot13 = option;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.UserRequiredActions;
    var _closure1_slot14 = verify;
    tangon = tangon.AppContext;
    tangon = tangon.APP;
    var _closure1_slot15 = tangon;
    tangon = {'key': 'EMAIL_VERIFICATION_MODAL_OPEN', 'store': null, 'closable': false, 'center': true};
    tangon['store'] = option;
    verify = function() { // Original name: isOpen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 15;
            entity = tangon[entity];
            tangon = undefined;
            report = zuuluu.bind(tangon)(entity);
            zuuluu = report.isFullScreenVerification;
            oscard = _closure1_slot13;
            entity = oscard.getAction;
            entity = entity.bind(oscard)();
            entity = zuuluu.bind(report)(entity);
            if(!entity) { _fun00008_ip = 73; continue _fun00007 }
 53:
            report = _closure1_slot9;
            zuuluu = report.getToken;
            report = zuuluu.bind(report)();
            zuuluu = null;
            entity = zuuluu != report;
 73:
            if(!entity) { _fun00008_ip = 122; continue _fun00007 }
 76:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 16;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.isEligibleForSafetyFlowsExperiment;
            michal = {};
            report = 'modal-manager-verification';
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity = !michal;
 122:
            return entity;
        }
    };
    tangon['isOpen'] = verify;
    verify = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 17;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = verify;
    var _closure1_slot16 = tangon;
    tangon = {'key': 'USER_REQUIRED_ACTION_UPDATE', 'store': null, 'center': true};
    tangon['store'] = option;
    option = function() { // Original name: isOpen
        zuuluu = _closure1_slot13;
        michal = zuuluu.getAction;
        michal = michal.bind(zuuluu)();
        entity = _closure1_slot14;
        entity = entity.AGREEMENTS;
        entity = michal === entity;
        return entity;
    };
    tangon['isOpen'] = option;
    option = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = option;
    var _closure1_slot17 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: DeprecatedModalManager
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                backup = 0;
                entity = copyRestArgs(backup);
                option = _closure1_slot4;
                michal = _closure2_slot0;
                oscard = undefined;
                option = option.bind(oscard)(tangon, michal);
                yankee = new Array(0);
                backup = yankee;
                foxtra = entity;
                romeon = 0;
                entity = arraySpread(backup, foxtra, romeon);
                entity = _closure1_slot6;
                offset = entity.bind(oscard)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot18;
                entity = entity.bind(oscard)();
                if(entity) { _fun00010_ip = 86; continue _fun00009 }
 73:
                entity = offset.apply;
                entity = entity.bind(offset)(tangon, yankee);
                _fun00010_ip = 120; continue _fun00009;
 86:
                report = global;
                verify = report.Reflect;
                option = verify.construct;
                report = _closure1_slot6;
                report = report.bind(oscard)(tangon);
                report = report.constructor;
                entity = option.bind(verify)(offset, yankee, report);
 120:
                entity = michal.bind(oscard)(tangon, entity);
                michal = {};
                report = _closure1_slot21;
                option = _closure1_slot17;
                tangon = _closure1_slot16;
                option = report.bind(oscard)(option, tangon);
                michal['CONNECTION_OPEN_SUPPLEMENTAL'] = option;
                tangon = report.bind(oscard)(tangon);
                michal['EMAIL_VERIFICATION_MODAL_OPEN'] = tangon;
                tangon = function(argFoo) { // Original name: USER_REQUIRED_ACTION_UPDATE
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tangon = argFoo;
                        oscard = _closure1_slot21;
                        report = _closure1_slot17;
                        zuuluu = _closure1_slot16;
                        entity = undefined;
                        zuuluu = oscard.bind(entity)(report, zuuluu);
                        oscard = tangon.requiredAction;
                        report = null;
                        if(!(report != oscard)) { _fun00012_ip = 60; continue _fun00011 }
 38:
                        tangon = tangon.requiredAction;
                        if(!(report != tangon)) { _fun00012_ip = 191; continue _fun00011 }
 51:
                        zuuluu = zuuluu.bind(entity)();
                        _fun00012_ip = 191; continue _fun00011;
 60:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        report = 13;
                        zuuluu = zuuluu[report];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isModalOpen;
                        oscard = 'USER_REQUIRED_ACTION_UPDATE';
                        zuuluu = zuuluu.bind(tangon)(oscard);
                        if(!zuuluu) { _fun00012_ip = 126; continue _fun00011 }
 98:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[report];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.popModal;
                        zuuluu = zuuluu.bind(tangon)(oscard);
 126:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[report];
                        oscard = tangon.bind(entity)(zuuluu);
                        zuuluu = oscard.isModalOpen;
                        tangon = 'EMAIL_VERIFICATION_MODAL_OPEN';
                        zuuluu = zuuluu.bind(oscard)(tangon);
                        if(!zuuluu) { _fun00012_ip = 191; continue _fun00011 }
 163:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        michal = michal[report];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.popModal;
                        michal = michal.bind(zuuluu)(tangon);
 191:
                        return entity;
                    }
                };
                michal['USER_REQUIRED_ACTION_UPDATE'] = tangon;
                tangon = {'key': 'CHANNEL_SETTINGS_OPEN', 'store': null, 'closable': false};
                option = _closure1_slot10;
                tangon['store'] = option;
                option = function() { // Original name: getComponent
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 19;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    entity = entity.default;
                    return entity;
                };
                tangon['getComponent'] = option;
                tangon = report.bind(oscard)(tangon);
                michal['CHANNEL_SETTINGS_OPEN'] = tangon;
                tangon = {'key': 'GUILD_SETTINGS_OPEN', 'store': null, 'closable': false};
                option = _closure1_slot8;
                tangon['store'] = option;
                option = function() { // Original name: getComponent
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 20;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    entity = entity.default;
                    return entity;
                };
                tangon['getComponent'] = option;
                tangon = report.bind(oscard)(tangon);
                michal['GUILD_SETTINGS_OPEN'] = tangon;
                tangon = {'key': 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'store': null, 'closable': false};
                option = _closure1_slot12;
                tangon['store'] = option;
                option = function() { // Original name: getComponent
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 21;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    entity = entity.default;
                    return entity;
                };
                tangon['getComponent'] = option;
                tangon = report.bind(oscard)(tangon);
                michal['NOTIFICATION_SETTINGS_MODAL_OPEN'] = tangon;
                tangon = {'key': 'CREATE_INVITE_MODAL_OPEN', 'store': null, 'closable': false};
                option = _closure1_slot11;
                tangon['store'] = option;
                golfie = function() { // Original name: getComponent
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 22;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    entity = entity.default;
                    return entity;
                };
                tangon['getComponent'] = golfie;
                tangon = report.bind(oscard)(tangon);
                michal['CREATE_INVITE_MODAL_OPEN'] = tangon;
                zuuluu = _closure1_slot20;
                michal['GUILD_SETTINGS_CLOSE'] = zuuluu;
                michal['USER_SETTINGS_MODAL_CLOSE'] = zuuluu;
                michal['CHANNEL_SETTINGS_CLOSE'] = zuuluu;
                michal['NOTIFICATION_SETTINGS_MODAL_CLOSE'] = zuuluu;
                michal['PREMIUM_PAYMENT_MODAL_CLOSE'] = zuuluu;
                michal['EMAIL_VERIFICATION_MODAL_CLOSE'] = zuuluu;
                michal['CREATE_INVITE_MODAL_CLOSE'] = zuuluu;
                michal['QUICKSWITCHER_HIDE'] = zuuluu;
                michal['IFE_EXPERIMENT_SEARCH_MODAL_CLOSE'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();