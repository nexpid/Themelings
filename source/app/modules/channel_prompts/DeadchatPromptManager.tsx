// app/modules/channel_prompts/DeadchatPromptManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot11;
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
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    option = oscard[tangon];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    var _closure1_slot9 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: DeadchatPromptManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            zuuluu = _closure1_slot4;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot10;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            zuuluu = {};
            tangon = function(argFoo) { // Original name: POST_CONNECTION_OPEN
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleConnectionOpen;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['POST_CONNECTION_OPEN'] = tangon;
            tangon = function() { // Original name: IDLE
                michal = _closure3_slot0;
                entity = michal.handleIdleChange;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu['IDLE'] = tangon;
            entity['actions'] = zuuluu;
            zuuluu = function() {
                michal = _closure3_slot0;
                entity = michal._attemptDeadchatPrompt;
                entity = entity.bind(michal)();
                entity = michal._triggerGamingStatsSetupExperiment;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['handleConnectionOpen'] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = global;
                    michal = entity.Date;
                    entity = michal.now;
                    zuuluu = entity.bind(michal)();
                    michal = _closure1_slot9;
                    zuuluu = zuuluu - michal;
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.Millis;
                    michal = michal.HOUR;
                    if(!(zuuluu > michal)) { _fun00006_ip = 83; continue _fun00005 }
 66:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu._attemptDeadchatPrompt;
                    michal = michal.bind(zuuluu)();
 83:
                    return entity;
                }
            };
            entity['handleIdleChange'] = zuuluu;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot8;
                    entity = zuuluu.getGuilds;
                    report = entity.bind(zuuluu)();
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.keys;
                    report = zuuluu.bind(tangon)(report);
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        zuuluu = entity.SimpleDeadchatPromptExperiment;
                        michal = zuuluu.getCurrentConfig;
                        entity = {};
                        tangon = argFoo;
                        entity['guildId'] = tangon;
                        tangon = 'manager';
                        entity['location'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = entity.triggerDeadchat;
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    report = tangon.length;
                    zuuluu = 0;
                    if(!(report > zuuluu)) { _fun00008_ip = 131; continue _fun00007 }
 79:
                    zuuluu = global;
                    report = zuuluu.Date;
                    zuuluu = report.now;
                    zuuluu = zuuluu.bind(report)();
                    _closure1_slot9 = zuuluu;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 9;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.initiateChannelPrompts;
                    michal = michal.bind(zuuluu)(tangon);
 131:
                    return entity;
                }
            };
            entity['_attemptDeadchatPrompt'] = zuuluu;
            michal = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getGuilds;
                tangon = michal.bind(zuuluu)();
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.keys;
                tangon = michal.bind(zuuluu)(tangon);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    tangon = michal.GamingStatsSetupExperiment;
                    zuuluu = tangon.trackExposure;
                    michal = {};
                    report = argFoo;
                    michal['guildId'] = report;
                    report = 'manager';
                    michal['location'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['_triggerGamingStatsSetupExperiment'] = michal;
            return entity;
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
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_prompts/DeadchatPromptManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();