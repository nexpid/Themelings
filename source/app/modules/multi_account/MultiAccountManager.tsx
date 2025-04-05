// app/modules/multi_account/MultiAccountManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argCor;
    var _closure1_slot1 = entity;
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
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    var _closure1_slot5 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot12 = tangon;
    tangon = false;
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: MultiAccountManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                verify = this;
                report = entity.onSwitchStart;
                tangon = entity.onSwitchSuccess;
                zuuluu = entity.onSwitchError;
                michal = entity.onTokenSet;
                entity = _closure1_slot5;
                golfie = _closure2_slot0;
                option = undefined;
                entity = entity.bind(option)(verify, golfie);
                entity = _closure1_slot8;
                backup = entity.bind(option)(golfie);
                golfie = _closure1_slot7;
                entity = _closure1_slot14;
                entity = entity.bind(option)();
                if(entity) { _fun00004_ip = 91; continue _fun00003 }
 78:
                entity = backup.apply;
                entity = entity.bind(backup)(verify, option);
                _fun00004_ip = 129; continue _fun00003;
 91:
                yankee = global;
                foxtra = yankee.Reflect;
                romeon = foxtra.construct;
                offset = _closure1_slot8;
                offset = offset.bind(option)(verify);
                yankee = offset.constructor;
                offset = new Array(0);
                entity = romeon.bind(foxtra)(backup, offset, yankee);
 129:
                entity = golfie.bind(option)(verify, entity);
                var _closure3_slot0 = entity;
                golfie = {};
                option = function(argFoo) { // Original name: LOGOUT
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleLogout;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['LOGOUT'] = option;
                entity['actions'] = golfie;
                golfie = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure1_slot10;
                        michal = zuuluu.getCurrentUser;
                        zuuluu = michal.bind(zuuluu)();
                        tangon = null;
                        if(!(tangon != zuuluu)) { _fun00006_ip = 392; continue _fun00005 }
 25:
                        michal = _closure1_slot4;
                        if(!(tangon != michal)) { _fun00006_ip = 267; continue _fun00005 }
 36:
                        report = _closure1_slot4;
                        michal = _closure1_slot3;
                        if(!(report === michal)) { _fun00006_ip = 130; continue _fun00005 }
 48:
                        oscard = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 8;
                        report = report[michal];
                        michal = undefined;
                        oscard = oscard.bind(michal)(report);
                        report = oscard.track;
                        michal = _closure1_slot12;
                        michal = michal.MULTI_ACCOUNT_SWITCH_FAILURE;
                        michal = report.bind(oscard)(michal);
                        report = _closure3_slot0;
                        report = report.onSwitchError;
                        if(!(tangon != report)) { _fun00006_ip = 263; continue _fun00005 }
 110:
                        report = _closure3_slot0;
                        michal = report.onSwitchError;
                        michal = michal.bind(report)(zuuluu);
                        _fun00006_ip = 263; continue _fun00005;
 130:
                        report = _closure1_slot11;
                        michal = report.getUsers;
                        oscard = michal.bind(report)();
                        report = oscard.map;
                        michal = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        option = report.bind(oscard)(michal);
                        oscard = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 8;
                        report = report[michal];
                        michal = undefined;
                        golfie = oscard.bind(michal)(report);
                        oscard = golfie.track;
                        michal = _closure1_slot12;
                        report = michal.MULTI_ACCOUNT_SWITCH_SUCCESS;
                        michal = {};
                        verify = _closure1_slot4;
                        michal['from_user_id'] = verify;
                        michal['linked_user_ids'] = option;
                        michal = oscard.bind(golfie)(report, michal);
                        report = _closure3_slot0;
                        report = report.onSwitchSuccess;
                        if(!(tangon != report)) { _fun00006_ip = 263; continue _fun00005 }
 243:
                        oscard = _closure3_slot0;
                        report = oscard.onSwitchSuccess;
                        michal = _closure1_slot13;
                        michal = report.bind(oscard)(zuuluu, michal);
 263:
                        var _closure1_slot4 = tangon;
 267:
                        michal = zuuluu.id;
                        var _closure1_slot3 = michal;
                        oscard = _closure1_slot1;
                        michal = _closure1_slot2;
                        golfie = 9;
                        michal = michal[golfie];
                        report = undefined;
                        oscard = oscard.bind(report)(michal);
                        michal = oscard.getToken;
                        oscard = michal.bind(oscard)();
                        michal = tangon != oscard;
                        if(!michal) { _fun00006_ip = 323; continue _fun00005 }
 315:
                        option = '';
                        michal = option !== oscard;
 323:
                        if(!michal) { _fun00006_ip = 360; continue _fun00005 }
 326:
                        michal = _closure1_slot1;
                        entity = _closure1_slot2;
                        entity = entity[golfie];
                        report = michal.bind(report)(entity);
                        michal = report.setToken;
                        entity = zuuluu.id;
                        entity = michal.bind(report)(oscard, entity);
 360:
                        michal = _closure3_slot0;
                        michal = michal.onTokenSet;
                        if(!(tangon != michal)) { _fun00006_ip = 392; continue _fun00005 }
 377:
                        michal = _closure3_slot0;
                        entity = michal.onTokenSet;
                        entity = entity.bind(michal)(zuuluu);
 392:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleConnectionOpen'] = golfie;
                oscard = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.isSwitchingAccount;
                        if(zuuluu) { _fun00008_ip = 60; continue _fun00007 }
 15:
                        zuuluu = false;
                        _closure1_slot13 = zuuluu;
                        report = _closure1_slot1;
                        tangon = _closure1_slot2;
                        zuuluu = 9;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(tangon);
                        tangon = report.removeToken;
                        zuuluu = _closure1_slot3;
                        zuuluu = tangon.bind(report)(zuuluu);
                        _fun00008_ip = 117; continue _fun00007;
 60:
                        zuuluu = _closure1_slot3;
                        _closure1_slot4 = zuuluu;
                        tangon = _closure3_slot0;
                        report = tangon.onSwitchStart;
                        tangon = null;
                        if(!(tangon != report)) { _fun00008_ip = 101; continue _fun00007 }
 87:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.onSwitchStart;
                        zuuluu = zuuluu.bind(tangon)();
 101:
                        entity = entity.goHomeAfterSwitching;
                        entity = !entity;
                        entity = !entity;
                        _closure1_slot13 = entity;
 117:
                        entity = null;
                        _closure1_slot3 = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleLogout'] = oscard;
                entity['onSwitchStart'] = report;
                entity['onSwitchSuccess'] = tangon;
                entity['onSwitchError'] = zuuluu;
                entity['onTokenSet'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot9;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot6;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 10;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.subscribe;
            tangon = 'CONNECTION_OPEN';
            michal = function() {
                michal = _closure3_slot0;
                entity = michal.handleConnectionOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = report.bind(oscard)(tangon, michal);
            michal = zuuluu.handleConnectionOpen;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = 'CONNECTION_OPEN';
            michal = function() {
                michal = _closure3_slot0;
                entity = michal.handleConnectionOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/multi_account/MultiAccountManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();