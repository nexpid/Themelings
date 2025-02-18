// app/modules/gateway/LocalPresenceStateManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot9;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: LocalPresenceStateManager
            golfie = this;
            entity = _closure1_slot2;
            report = _closure2_slot0;
            oscard = undefined;
            entity = entity.bind(oscard)(golfie, report);
            tangon = _closure1_slot8;
            entity = new Array(1);
            zuuluu = false;
            entity[0] = zuuluu;
            entity = tangon.bind(oscard)(golfie, report, entity);
            tangon = argFoo;
            entity['socket'] = tangon;
            entity['switchingAccounts'] = zuuluu;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 6;
            michal = tangon[michal];
            report = zuuluu.bind(oscard)(michal);
            zuuluu = entity.emitPresenceUpdate;
            michal = zuuluu.bind;
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = 5;
            michal = 20000;
            michal = report.bind(oscard)(zuuluu, michal, tangon);
            entity['didCommit'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'getInitialState';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = _closure1_slot7;
            entity = michal.getLocalPresence;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'getNextState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot7;
            entity = michal.getLocalPresence;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'shouldCommit';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity.socket;
            entity = michal.isSessionEstablished;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'emitPresenceUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            offset = entity.status;
            verify = entity.since;
            option = entity.activities;
            golfie = entity.afk;
            entity = this;
            michal = entity.socket;
            entity = michal.presenceUpdate;
            yankee = michal;
            entity = yankee[entity](offset, verify, option, golfie, oscard);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleConnectionOpen';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.switchingAccounts;
            tangon = !entity;
            zuuluu = michal.update;
            entity = {};
            entity = zuuluu.bind(michal)(entity, tangon);
            entity = false;
            michal['switchingAccounts'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'handleAccountSwitch';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            zuuluu = this;
            entity = true;
            zuuluu['switchingAccounts'] = entity;
            entity = zuuluu.reset;
            entity = entity.bind(zuuluu)();
            michal = zuuluu.emitPresenceUpdate;
            entity = zuuluu.getState;
            entity = entity.bind(zuuluu)();
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 8;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/LocalPresenceStateManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();