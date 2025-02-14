// app/modules/quests/experiments/QuestsLoggingExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    romeo = true;
    tango['value'] = romeo;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.NOOP;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createExperiment;
    tango = {'id': '2024-04_quests_logging', 'kind': 'user', 'label': 'Quests Logging'};
    verify = {};
    yankee = false;
    verify['enabled'] = yankee;
    tango['defaultConfig'] = verify;
    offset = {'id': 0, 'label': 'Control'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 1, 'label': 'Quest logging enabled'};
    yankee = {};
    yankee['enabled'] = romeo;
    offset['config'] = yankee;
    verify[1] = offset;
    tango['treatments'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/experiments/QuestsLoggingExperiment.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: getQuestLogger
        _fun67139: for(var _fun67139_ip = 0; ; ) switch(_fun67139_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun67139_ip = 11; continue _fun67139 }
 9:
            entity = {};
 11:
            zulu = entity.quest;
            offset = entity.location;
            golf = _closure1_slot3;
            oscar = golf.getCurrentConfig;
            tango = {};
            entity = 'quests_logging';
            tango['location'] = entity;
            entity = {};
            options = false;
            entity['autoTrackExposure'] = options;
            entity = oscar.bind(golf)(tango, entity);
            tango = entity.enabled;
            entity = null;
            oscar = entity == zulu;
            verify = undefined;
            if(oscar) { _fun67139_ip = 95; continue _fun67139 }
 78:
            zulu = zulu.config;
            zulu = zulu.messages;
            verify = zulu.questName;
 95:
            zulu = entity != offset;
            golf = '';
            oscar = golf;
            if(!zulu) { _fun67139_ip = 131; continue _fun67139 }
 109:
            zulu = global;
            zulu = zulu.HermesInternal;
            options = zulu.concat;
            zulu = '-';
            oscar = options.bind(zulu)(offset);
 131:
            entity = entity != verify;
            if(!entity) { _fun67139_ip = 165; continue _fun67139 }
 138:
            entity = global;
            entity = entity.HermesInternal;
            options = entity.concat;
            zulu = '-';
            entity = ')';
            golf = options.bind(zulu)(verify, entity);
 165:
            zulu = _closure1_slot0;
            options = _closure1_slot1;
            entity = 2;
            entity = options[entity];
            entity = zulu.bind(report)(entity);
            report = entity.Logger;
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            entity = 'QuestLogger';
            romeo = zulu.bind(entity)(oscar, golf);
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            foxtrot = zulu;
            entity = new foxtrot[report](romeo, yankee);
            zulu = entity instanceof Object ? entity : zulu;
            entity = {};
            if(tango) { _fun67139_ip = 247; continue _fun67139 }
 241:
            report = _closure1_slot2;
            _fun67139_ip = 253; continue _fun67139;
 247:
            report = zulu.log;
 253:
            entity['log'] = report;
            if(tango) { _fun67139_ip = 267; continue _fun67139 }
 261:
            report = _closure1_slot2;
            _fun67139_ip = 272; continue _fun67139;
 267:
            report = zulu.warn;
 272:
            entity['warn'] = report;
            if(tango) { _fun67139_ip = 285; continue _fun67139 }
 279:
            report = _closure1_slot2;
            _fun67139_ip = 290; continue _fun67139;
 285:
            report = zulu.error;
 290:
            entity['error'] = report;
            if(tango) { _fun67139_ip = 303; continue _fun67139 }
 297:
            report = _closure1_slot2;
            _fun67139_ip = 309; continue _fun67139;
 303:
            report = zulu.info;
 309:
            entity['info'] = report;
            if(tango) { _fun67139_ip = 323; continue _fun67139 }
 317:
            report = _closure1_slot2;
            _fun67139_ip = 329; continue _fun67139;
 323:
            report = zulu.verbose;
 329:
            entity['verbose'] = report;
            if(tango) { _fun67139_ip = 343; continue _fun67139 }
 337:
            mike = _closure1_slot2;
            _fun67139_ip = 349; continue _fun67139;
 343:
            mike = zulu.trace;
 349:
            entity['trace'] = mike;
            return entity;
        }
    };
    zulu['getQuestLogger'] = mike;
    return entity;
})();