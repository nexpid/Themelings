// app/modules/quests/experiments/QuestsLoggingExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NOOP;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createExperiment;
    tangon = {'id': '2024-04_quests_logging', 'kind': 'user', 'label': 'Quests Logging'};
    verify = {};
    yankee = false;
    verify['enabled'] = yankee;
    tangon['defaultConfig'] = verify;
    offset = {'id': 0, 'label': 'Control'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 1, 'label': 'Quest logging enabled'};
    yankee = {};
    yankee['enabled'] = romeon;
    offset['config'] = yankee;
    verify[1] = offset;
    tangon['treatments'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/experiments/QuestsLoggingExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: getQuestLogger
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            entity = {};
 11:
            zuuluu = entity.quest;
            offset = entity.location;
            golfie = _closure1_slot3;
            oscard = golfie.getCurrentConfig;
            tangon = {};
            entity = 'quests_logging';
            tangon['location'] = entity;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = oscard.bind(golfie)(tangon, entity);
            tangon = entity.enabled;
            entity = null;
            oscard = entity == zuuluu;
            verify = undefined;
            if(oscard) { _fun00002_ip = 95; continue _fun00001 }
 78:
            zuuluu = zuuluu.config;
            zuuluu = zuuluu.messages;
            verify = zuuluu.questName;
 95:
            zuuluu = entity != offset;
            golfie = '';
            oscard = golfie;
            if(!zuuluu) { _fun00002_ip = 131; continue _fun00001 }
 109:
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            option = zuuluu.concat;
            zuuluu = '-';
            oscard = option.bind(zuuluu)(offset);
 131:
            entity = entity != verify;
            if(!entity) { _fun00002_ip = 165; continue _fun00001 }
 138:
            entity = global;
            entity = entity.HermesInternal;
            option = entity.concat;
            zuuluu = '-';
            entity = ')';
            golfie = option.bind(zuuluu)(verify, entity);
 165:
            zuuluu = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            entity = option[entity];
            entity = zuuluu.bind(report)(entity);
            report = entity.Logger;
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            entity = 'QuestLogger';
            romeon = zuuluu.bind(entity)(oscard, golfie);
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            foxtra = zuuluu;
            entity = new foxtra[report](romeon, yankee);
            zuuluu = entity instanceof Object ? entity : zuuluu;
            entity = {};
            if(tangon) { _fun00002_ip = 247; continue _fun00001 }
 241:
            report = _closure1_slot2;
            _fun00002_ip = 252; continue _fun00001;
 247:
            report = zuuluu.log;
 252:
            entity['log'] = report;
            if(tangon) { _fun00002_ip = 265; continue _fun00001 }
 259:
            report = _closure1_slot2;
            _fun00002_ip = 270; continue _fun00001;
 265:
            report = zuuluu.warn;
 270:
            entity['warn'] = report;
            if(tangon) { _fun00002_ip = 283; continue _fun00001 }
 277:
            report = _closure1_slot2;
            _fun00002_ip = 288; continue _fun00001;
 283:
            report = zuuluu.error;
 288:
            entity['error'] = report;
            if(tangon) { _fun00002_ip = 301; continue _fun00001 }
 295:
            report = _closure1_slot2;
            _fun00002_ip = 307; continue _fun00001;
 301:
            report = zuuluu.info;
 307:
            entity['info'] = report;
            if(tangon) { _fun00002_ip = 321; continue _fun00001 }
 315:
            report = _closure1_slot2;
            _fun00002_ip = 327; continue _fun00001;
 321:
            report = zuuluu.verbose;
 327:
            entity['verbose'] = report;
            if(tangon) { _fun00002_ip = 341; continue _fun00001 }
 335:
            michal = _closure1_slot2;
            _fun00002_ip = 347; continue _fun00001;
 341:
            michal = zuuluu.trace;
 347:
            entity['trace'] = michal;
            return entity;
        }
    };
    zuuluu['getQuestLogger'] = michal;
    return entity;
})();