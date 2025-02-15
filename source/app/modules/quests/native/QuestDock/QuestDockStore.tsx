// app/modules/quests/native/QuestDock/QuestDockStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.QuestDockMode;
    var _closure1_slot9 = mike;
    mike = mike.COLLAPSED;
    var _closure1_slot2 = mike;
    mike = null;
    var _closure1_slot3 = mike;
    mike = false;
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: QuestDockStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                mike = null;
                if(!(mike != entity)) { _fun00006_ip = 84; continue _fun00005 }
 9:
                entity = entity.questDockSoftDismissedAt;
                _closure1_slot3 = entity;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isSoftDismissed;
                entity = _closure1_slot3;
                entity = zulu.bind(tango)(entity);
                zulu = _closure1_slot9;
                if(entity) { _fun00006_ip = 74; continue _fun00005 }
 66:
                entity = zulu.COLLAPSED;
                _fun00006_ip = 80; continue _fun00005;
 74:
                entity = zulu.SOFT_DISMISSED;
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
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot2;
            entity['prevRestingQuestDockMode'] = zulu;
            mike = _closure1_slot3;
            entity['questDockSoftDismissedAt'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'prevRestingQuestDockMode';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot2;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'questDockSoftDismissedAt';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot3;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isVisible';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot10;
            return entity;
        };
        report['get'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'QuestDockStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handlePrevRestingQuestDockModeUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            tango = mike.mode;
            entity = _closure1_slot2;
            entity = tango !== entity;
            tango = mike.mode;
            _closure1_slot2 = tango;
            if(!entity) { _fun00008_ip = 73; continue _fun00007 }
 31:
            report = mike.mode;
            mike = _closure1_slot9;
            tango = mike.SOFT_DISMISSED;
            mike = null;
            if(!(report === tango)) { _fun00008_ip = 69; continue _fun00007 }
 52:
            tango = global;
            report = tango.Date;
            tango = report.now;
            mike = tango.bind(report)();
 69:
            _closure1_slot3 = mike;
 73:
            return entity;
        }
    };
    mike['QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE'] = verify;
    verify = function() { // Original name: handleResetSoftDismissal
        entity = _closure1_slot9;
        entity = entity.COLLAPSED;
        _closure1_slot2 = entity;
        entity = null;
        _closure1_slot3 = entity;
        entity = undefined;
        return entity;
    };
    mike['QUESTS_DOCK_RESET_SOFT_DISMISSAL'] = verify;
    tango = function(argFoo) { // Original name: handleQuestDockVisibilityOverrideUpdate
        entity = argFoo;
        mike = entity.isVisible;
        _closure1_slot10 = mike;
        entity = undefined;
        return entity;
    };
    mike['QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestDock/QuestDockStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();