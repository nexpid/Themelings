// app/modules/quests/native/QuestDock/QuestDockStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.QuestDockMode;
    var _closure1_slot9 = michal;
    michal = michal.COLLAPSED;
    var _closure1_slot2 = michal;
    michal = null;
    var _closure1_slot3 = michal;
    michal = false;
    var _closure1_slot10 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: QuestDockStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot11;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                michal = null;
                if(!(michal != entity)) { _fun00006_ip = 84; continue _fun00005 }
 9:
                entity = entity.questDockSoftDismissedAt;
                _closure1_slot3 = entity;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.isSoftDismissed;
                entity = _closure1_slot3;
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = _closure1_slot9;
                if(entity) { _fun00006_ip = 74; continue _fun00005 }
 66:
                entity = zuuluu.COLLAPSED;
                _fun00006_ip = 80; continue _fun00005;
 74:
                entity = zuuluu.SOFT_DISMISSED;
 80:
                _closure1_slot2 = entity;
 84:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            zuuluu = _closure1_slot2;
            entity['prevRestingQuestDockMode'] = zuuluu;
            michal = _closure1_slot3;
            entity['questDockSoftDismissedAt'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'prevRestingQuestDockMode';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot2;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'questDockSoftDismissedAt';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot3;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isVisible';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot10;
            return entity;
        };
        report['get'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'QuestDockStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = 8;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handlePrevRestingQuestDockModeUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = michal.mode;
            entity = _closure1_slot2;
            entity = tangon !== entity;
            tangon = michal.mode;
            _closure1_slot2 = tangon;
            if(!entity) { _fun00008_ip = 73; continue _fun00007 }
 31:
            report = michal.mode;
            michal = _closure1_slot9;
            tangon = michal.SOFT_DISMISSED;
            michal = null;
            if(!(report === tangon)) { _fun00008_ip = 69; continue _fun00007 }
 52:
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            michal = tangon.bind(report)();
 69:
            _closure1_slot3 = michal;
 73:
            return entity;
        }
    };
    michal['QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE'] = verify;
    verify = function() { // Original name: handleResetSoftDismissal
        entity = _closure1_slot9;
        entity = entity.COLLAPSED;
        _closure1_slot2 = entity;
        entity = null;
        _closure1_slot3 = entity;
        entity = undefined;
        return entity;
    };
    michal['QUESTS_DOCK_RESET_SOFT_DISMISSAL'] = verify;
    tangon = function(argFoo) { // Original name: handleQuestDockVisibilityOverrideUpdate
        entity = argFoo;
        michal = entity.isVisible;
        _closure1_slot10 = michal;
        entity = undefined;
        return entity;
    };
    michal['QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestDock/QuestDockStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();