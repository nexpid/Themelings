// app/modules/application_commands/ApplicationCommandIndexActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchApplicationCommandIndex
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 271; continue _fun00001 }
 15:
                    var _closure4_slot0 = michal;
                    zuuluu = argBar;
                    var _closure4_slot1 = zuuluu;
                    zuuluu = undefined;
                    var _closure4_slot2 = zuuluu;
                    var _closure4_slot3 = zuuluu;
                    var _closure4_slot4 = zuuluu;
                    var _closure4_slot5 = zuuluu;
                    var _closure4_slot6 = zuuluu;
                    var _closure4_slot7 = zuuluu;
                    tangon = global;
                    oscard = tangon.performance;
                    tangon = oscard.now;
                    tangon = tangon.bind(oscard)();
                    _closure4_slot3 = tangon;
                    tangon = 0;
                    _closure4_slot4 = tangon;
                    oscard = michal.type;
                    tangon = 'channel';
                    if(!(tangon !== oscard)) { _fun00002_ip = 193; continue _fun00001 }
 92:
                    tangon = 'guild';
                    if(!(tangon !== oscard)) { _fun00002_ip = 164; continue _fun00001 }
 100:
                    tangon = 'user';
                    if(!(tangon !== oscard)) { _fun00002_ip = 145; continue _fun00001 }
 108:
                    tangon = 'application';
                    if(!(tangon === oscard)) { _fun00002_ip = 220; continue _fun00001 }
 116:
                    golfie = _closure1_slot5;
                    oscard = golfie.APPLICATION_COMMAND_INDEX_APPLICATION;
                    tangon = michal.applicationId;
                    tangon = oscard.bind(golfie)(tangon);
                    _closure4_slot2 = tangon;
                    _fun00002_ip = 220; continue _fun00001;
 145:
                    tangon = _closure1_slot5;
                    tangon = tangon.APPLICATION_COMMAND_INDEX_USER;
                    _closure4_slot2 = tangon;
                    _fun00002_ip = 220; continue _fun00001;
 164:
                    golfie = _closure1_slot5;
                    oscard = golfie.APPLICATION_COMMAND_INDEX_GUILD;
                    tangon = michal.guildId;
                    tangon = oscard.bind(golfie)(tangon);
                    _closure4_slot2 = tangon;
                    _fun00002_ip = 220; continue _fun00001;
 193:
                    oscard = _closure1_slot5;
                    tangon = oscard.APPLICATION_COMMAND_INDEX_CHANNEL;
                    michal = michal.channelId;
                    michal = tangon.bind(oscard)(michal);
                    _closure4_slot2 = michal;
 220:
                    michal = function() {
                        tangon = _closure1_slot3;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                    if(zuuluu) { _fun00004_ip = 168; continue _fun00003 }
 12:
                                    zuuluu = argFoo;
                                    var _closure7_slot0 = zuuluu;
                                    report = _closure4_slot4;
                                    tangon = _closure1_slot7;
                                    if(!(!(report >= tangon))) { _fun00004_ip = 95; continue _fun00003 }
 37:
                                    tangon = global;
                                    report = tangon.Promise;
                                    tangon = report.prototype;
                                    tangon = Object.create(tangon, {constructor: {value: report}});
                                    option = function(argFoo) {
                                        entity = global;
                                        tangon = entity.setTimeout;
                                        zuuluu = _closure7_slot0;
                                        michal = undefined;
                                        entity = argFoo;
                                        entity = tangon.bind(michal)(entity, zuuluu);
                                        return entity;
                                    };
                                    verify = tangon;
                                    michal = new verify[report](option, golfie);
                                    tangon = michal instanceof Object ? michal : tangon;
                                    SaveGenerator(address=74);
 72:
                                    return tangon;
 74:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=1);
                                    if(michal) { _fun00004_ip = 92; continue _fun00003 }
 80:
                                    report = _closure4_slot6;
                                    michal = undefined;
                                    michal = report.bind(michal)();
                                    _fun00004_ip = 165; continue _fun00003;
 92:
                                    return tangon;
 95:
                                    golfie = _closure4_slot7;
                                    tangon = {};
                                    report = true;
                                    tangon['error'] = report;
                                    report = undefined;
                                    tangon = golfie.bind(report)(tangon);
                                    tangon = _closure1_slot1;
                                    golfie = _closure1_slot2;
                                    zuuluu = 2;
                                    zuuluu = golfie[zuuluu];
                                    report = tangon.bind(report)(zuuluu);
                                    tangon = report.dispatch;
                                    zuuluu = {};
                                    golfie = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                    zuuluu['type'] = golfie;
                                    oscard = _closure4_slot0;
                                    zuuluu['target'] = oscard;
                                    michal = tangon.bind(report)(zuuluu);
 165:
                                    return michal;
 168:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure5_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure5_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    michal = michal.bind(zuuluu)();
                    _closure4_slot5 = michal;
                    michal = function() { // Original name: fetch
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 3;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
                        tangon = michal.HTTP;
                        zuuluu = tangon.get;
                        michal = {};
                        golfie = _closure4_slot2;
                        michal['url'] = golfie;
                        golfie = _closure1_slot7;
                        oscard = _closure4_slot4;
                        golfie = golfie - oscard;
                        oscard = 1;
                        oscard = golfie - oscard;
                        michal['retries'] = oscard;
                        report = _closure4_slot1;
                        report = report.signal;
                        michal['signal'] = report;
                        report = function() { // Original name: onRequestCreated
                            entity = _closure4_slot4;
                            entity = parseFloat(entity);
                            michal = entity + 1;
                            _closure4_slot4 = michal;
                            return entity;
                        };
                        michal['onRequestCreated'] = report;
                        report = false;
                        michal['rejectWithError'] = report;
                        tangon = zuuluu.bind(tangon)(michal);
                        zuuluu = tangon.then;
                        michal = function(argFoo) {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                tangon = argFoo;
                                michal = tangon.status;
                                entity = 202;
                                if(!(entity !== michal)) { _fun00006_ip = 102; continue _fun00005 }
 15:
                                michal = _closure4_slot7;
                                entity = {};
                                zuuluu = false;
                                entity['error'] = zuuluu;
                                zuuluu = undefined;
                                entity = michal.bind(zuuluu)(entity);
                                michal = _closure1_slot1;
                                oscard = _closure1_slot2;
                                entity = 2;
                                entity = oscard[entity];
                                zuuluu = michal.bind(zuuluu)(entity);
                                michal = zuuluu.dispatch;
                                entity = {};
                                oscard = 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS';
                                entity['type'] = oscard;
                                report = _closure4_slot0;
                                entity['target'] = report;
                                tangon = tangon.body;
                                entity['index'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                _fun00006_ip = 123; continue _fun00005;
 102:
                                tangon = _closure4_slot5;
                                zuuluu = _closure1_slot6;
                                michal = undefined;
                                entity = tangon.bind(michal)(zuuluu);
 123:
                                return entity;
                            }
                        };
                        entity = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                zuuluu = argFoo;
                                michal = _closure4_slot1;
                                michal = michal.signal;
                                michal = michal.aborted;
                                if(michal) { _fun00008_ip = 181; continue _fun00007 }
 28:
                                tangon = zuuluu.status;
                                michal = 429;
                                if(!(michal !== tangon)) { _fun00008_ip = 118; continue _fun00007 }
 43:
                                tangon = _closure4_slot7;
                                michal = {};
                                report = true;
                                michal['error'] = report;
                                report = undefined;
                                michal = tangon.bind(report)(michal);
                                tangon = _closure1_slot1;
                                oscard = _closure1_slot2;
                                michal = 2;
                                michal = oscard[michal];
                                report = tangon.bind(report)(michal);
                                tangon = report.dispatch;
                                michal = {};
                                oscard = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                michal['type'] = oscard;
                                oscard = _closure4_slot0;
                                michal['target'] = oscard;
                                michal = tangon.bind(report)(michal);
                                _fun00008_ip = 179; continue _fun00007;
 118:
                                report = _closure4_slot5;
                                zuuluu = zuuluu.body;
                                oscard = zuuluu.retry_after;
                                golfie = _closure1_slot1;
                                tangon = _closure1_slot2;
                                zuuluu = 4;
                                zuuluu = tangon[zuuluu];
                                tangon = undefined;
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                zuuluu = zuuluu.Millis;
                                zuuluu = zuuluu.SECOND;
                                zuuluu = oscard * zuuluu;
                                michal = report.bind(tangon)(zuuluu);
 179:
                                return michal;
 181:
                                zuuluu = _closure4_slot7;
                                michal = {};
                                entity = true;
                                michal['error'] = entity;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            }
                        };
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    _closure4_slot6 = michal;
                    tangon = function(argFoo) { // Original name: end
                        entity = argFoo;
                        verify = entity.error;
                        option = global;
                        michal = option.performance;
                        entity = michal.now;
                        michal = entity.bind(michal)();
                        entity = _closure4_slot3;
                        offset = michal - entity;
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.track;
                        michal = _closure1_slot4;
                        zuuluu = michal.APPLICATION_COMMAND_PERFORMANCE;
                        michal = {};
                        michal['duration_ms'] = offset;
                        michal['error'] = verify;
                        verify = _closure4_slot1;
                        verify = verify.signal;
                        verify = verify.aborted;
                        michal['aborted'] = verify;
                        verify = true;
                        michal['include_applications'] = verify;
                        yankee = option.Math;
                        offset = yankee.max;
                        verify = _closure4_slot4;
                        option = 1;
                        verify = verify - option;
                        option = 0;
                        option = offset.bind(yankee)(verify, option);
                        michal['retries'] = option;
                        option = null;
                        michal['kind'] = option;
                        michal['command_type'] = option;
                        option = _closure4_slot2;
                        michal['url'] = option;
                        golfie = _closure4_slot0;
                        option = golfie.type;
                        michal['target_type'] = option;
                        oscard = _closure1_slot9;
                        oscard = oscard.bind(entity)(golfie);
                        michal['target_id'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    _closure4_slot7 = tangon;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=259);
 257:
                    return michal;
 259:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 268; continue _fun00001 }
 265:
                    return zuuluu;
 268:
                    return michal;
 271:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getTargetId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'channel';
            if(!(michal !== zuuluu)) { _fun00010_ip = 96; continue _fun00009 }
 16:
            michal = 'guild';
            if(!(michal !== zuuluu)) { _fun00010_ip = 89; continue _fun00009 }
 24:
            michal = 'user';
            if(!(michal !== zuuluu)) { _fun00010_ip = 85; continue _fun00009 }
 32:
            michal = 'application';
            if(!(michal !== zuuluu)) { _fun00010_ip = 78; continue _fun00009 }
 40:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.assertNever;
            zuuluu = zuuluu.bind(tangon)(entity);
            return michal;
 78:
            michal = entity.applicationId;
            return michal;
 85:
            michal = null;
            return michal;
 89:
            michal = entity.guildId;
            return michal;
 96:
            entity = entity.channelId;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot4 = golfie;
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = 5000;
    var _closure1_slot6 = tangon;
    tangon = 3;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/ApplicationCommandIndexActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchApplicationCommandIndex
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchApplicationCommandIndex'] = tangon;
    michal = function(argFoo) { // Original name: requestApplicationCommandIndex
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST';
        michal['type'] = report;
        report = argFoo;
        michal['target'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['requestApplicationCommandIndex'] = michal;
    return entity;
})();