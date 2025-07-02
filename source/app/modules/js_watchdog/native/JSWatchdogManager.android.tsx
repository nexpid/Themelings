// app/modules/js_watchdog/native/JSWatchdogManager.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        verify = argCor;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golfie;
        var _closure1_slot2 = oscard;
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
                _closure1_slot14 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = global;
        offset = entity.Object;
        option = offset.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = option.bind(offset)(zuuluu, entity, tangon);
        entity = 0;
        tangon = oscard[entity];
        entity = undefined;
        tangon = golfie.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        option = 1;
        tangon = oscard[option];
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
        tangon = report.bind(entity)(tangon);
        offset = tangon.AppStates;
        var _closure1_slot9 = offset;
        tangon = tangon.AnalyticEvents;
        var _closure1_slot10 = tangon;
        tangon = 7;
        tangon = oscard[tangon];
        yankee = golfie.bind(entity)(tangon);
        tangon = yankee.prototype;
        offset = Object.create(tangon, {constructor: {value: yankee}});
        backup = 'JSWatchdogManager';
        kiloes = offset;
        tangon = new kiloes[yankee](backup, foxtra);
        tangon = tangon instanceof Object ? tangon : offset;
        var _closure1_slot11 = tangon;
        tangon = 8;
        tangon = oscard[tangon];
        tangon = golfie.bind(entity)(tangon);
        tangon = tangon.Millis;
        tangon = tangon.HALF_SECOND;
        tangon = option * tangon;
        var _closure1_slot12 = tangon;
        option = 9;
        tangon = oscard[option];
        offset = verify.bind(entity)(tangon);
        tangon = offset.getConstants;
        tangon = tangon.bind(offset)();
        yankee = tangon.ReleaseChannel;
        offset = yankee.indexOf;
        tangon = 'canary';
        offset = offset.bind(yankee)(tangon);
        tangon = -1;
        tangon = tangon !== offset;
        option = oscard[option];
        verify = verify.bind(entity)(option);
        option = verify.getBuildNumberLabel;
        offset = option.bind(verify)();
        verify = offset.includes;
        option = 'dev';
        option = verify.bind(offset)(option);
        if(!tangon) { _fun00002_ip = 367; continue _fun00001 }
 364:
        tangon = !option;
 367:
        var _closure1_slot13 = tangon;
        tangon = 17;
        tangon = oscard[tangon];
        tangon = golfie.bind(entity)(tangon);
        michal = function(argFoo) {
            tangon = function(argFoo) { // Original name: JSWatchdogManager
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = this;
                    foxtra = 0;
                    entity = copyRestArgs(foxtra);
                    option = _closure1_slot4;
                    michal = _closure2_slot3;
                    tangon = undefined;
                    option = option.bind(tangon)(report, michal);
                    offset = new Array(0);
                    foxtra = offset;
                    romeon = entity;
                    yankee = 0;
                    entity = arraySpread(foxtra, romeon, yankee);
                    entity = _closure1_slot7;
                    verify = entity.bind(tangon)(michal);
                    michal = _closure1_slot6;
                    entity = _closure1_slot14;
                    entity = entity.bind(tangon)();
                    if(entity) { _fun00006_ip = 86; continue _fun00005 }
 73:
                    entity = verify.apply;
                    entity = entity.bind(verify)(report, offset);
                    _fun00006_ip = 120; continue _fun00005;
 86:
                    golfie = global;
                    option = golfie.Reflect;
                    golfie = option.construct;
                    oscard = _closure1_slot7;
                    oscard = oscard.bind(tangon)(report);
                    oscard = oscard.constructor;
                    entity = golfie.bind(option)(verify, offset, oscard);
 120:
                    entity = michal.bind(tangon)(report, entity);
                    var _closure3_slot0 = entity;
                    michal = true;
                    entity['_enabled'] = michal;
                    tangon = null;
                    entity['_timeoutId'] = tangon;
                    report = 3;
                    entity['_analyticsReportsRemaining'] = report;
                    entity['_cachedSession'] = tangon;
                    entity['_lastSessionId'] = tangon;
                    entity['_pingCompleted'] = michal;
                    michal = {};
                    tangon = function(argFoo) { // Original name: APP_STATE_UPDATE
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 10;
                            michal = michal[entity];
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            tangon = michal.JSWatchdogExperiment;
                            zuuluu = tangon.getCurrentConfig;
                            michal = {};
                            report = 'APP_STATE_UPDATE';
                            michal['location'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            michal = michal.enabled;
                            if(!michal) { _fun00008_ip = 81; continue _fun00007 }
 60:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.handleAppStateUpdate;
                            michal = argFoo;
                            michal = zuuluu.bind(tangon)(michal);
 81:
                            return entity;
                        }
                    };
                    michal['APP_STATE_UPDATE'] = tangon;
                    zuuluu = function() { // Original name: CONNECTION_OPEN_SUPPLEMENTAL
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 10;
                            michal = michal[entity];
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            tangon = michal.JSWatchdogExperiment;
                            zuuluu = tangon.getCurrentConfig;
                            michal = {};
                            report = 'CONNECTION_OPEN_SUPPLEMENTAL';
                            michal['location'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            michal = michal.enabled;
                            if(!michal) { _fun00010_ip = 77; continue _fun00009 }
 60:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.handleConnectionOpenSupplemental;
                            michal = michal.bind(zuuluu)();
 77:
                            return entity;
                        }
                    };
                    michal['CONNECTION_OPEN_SUPPLEMENTAL'] = zuuluu;
                    entity['actions'] = michal;
                    return entity;
                }
            };
            var _closure2_slot3 = tangon;
            michal = _closure1_slot8;
            zuuluu = undefined;
            entity = argFoo;
            entity = michal.bind(zuuluu)(tangon, entity);
            michal = _closure1_slot5;
            report = {};
            entity = 'handleAppStateUpdate';
            report['key'] = entity;
            entity = function(argFoo) { // Original name: value
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = this;
                    entity = argFoo;
                    zuuluu = entity.state;
                    entity = _closure1_slot9;
                    entity = entity.ACTIVE;
                    if(!(zuuluu !== entity)) { _fun00012_ip = 40; continue _fun00011 }
 28:
                    entity = michal.stopWatchdog;
                    entity = entity.bind(michal)();
                    _fun00012_ip = 50; continue _fun00011;
 40:
                    entity = michal.startWatchdog;
                    entity = entity.bind(michal)();
 50:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(7);
            entity[0] = report;
            report = {};
            option = 'handleConnectionOpenSupplemental';
            report['key'] = option;
            option = function() { // Original name: value
                entity = this;
                var _closure3_slot0 = entity;
                entity = global;
                tangon = entity.setTimeout;
                entity = undefined;
                zuuluu = function() {
                    michal = _closure3_slot0;
                    entity = michal.startWatchdog;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                michal = 0;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report['value'] = option;
            entity[1] = report;
            report = {};
            option = 'ping';
            report['key'] = option;
            option = _closure1_slot3;
            golfie = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        StartGenerator();
                        michal = arguments[0];
                        report = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00014_ip = 539; continue _fun00013 }
 18:
                        var _closure4_slot0 = report;
                        zuuluu = undefined;
                        if(!(michal === zuuluu)) { _fun00014_ip = 30; continue _fun00013 }
 28:
                        michal = false;
 30:
                        offset = michal;
                        verify = undefined;
                        foxtra = undefined;
                        SaveGenerator(address=41);
 39:
                        return zuuluu;
 41:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00014_ip = 536; continue _fun00013 }
 50:
                        sizing = false;
                        report['_pingCompleted'] = sizing;
 58: // try_start_0 // try_start_1
                        tangon = report.getCurrentSessionId;
                        tangon = tangon.bind(report)();
                        SaveGenerator(address=72);
 70:
                        return tangon;
 72:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(oscard) { _fun00014_ip = 466; continue _fun00013 }
 81:
                        verify = tangon;
                        yankee = _closure1_slot1;
                        oscard = _closure1_slot2;
                        romeon = 11;
                        oscard = oscard[romeon];
                        oscard = yankee.bind(zuuluu)(oscard);
                        yankee = null;
                        backup = yankee == oscard;
                        oscard = undefined;
                        if(backup) { _fun00014_ip = 175; continue _fun00013 }
 118:
                        kiloes = _closure1_slot1;
                        backup = _closure1_slot2;
                        backup = backup[romeon];
                        echoed = kiloes.bind(zuuluu)(backup);
                        result = echoed.ping;
                        backup = global;
                        kiloes = backup.Date;
                        backup = kiloes.now;
                        vacuum = backup.bind(kiloes)();
                        ctrled = verify;
                        source = offset;
                        update = _closure1_slot13;
                        sequen = echoed;
                        oscard = sequen[result](vacuum, ctrled, source, update, echoed);
 175:
                        SaveGenerator(address=179);
 177:
                        return oscard;
 179:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                        if(offset) { _fun00014_ip = 455; continue _fun00013 }
 188:
                        if(!oscard) { _fun00014_ip = 413; continue _fun00013 }
 194:
                        backup = _closure1_slot1;
                        offset = _closure1_slot2;
                        offset = offset[romeon];
                        offset = backup.bind(zuuluu)(offset);
                        backup = yankee == offset;
                        offset = undefined;
                        if(backup) { _fun00014_ip = 247; continue _fun00013 }
 220:
                        kiloes = _closure1_slot1;
                        backup = _closure1_slot2;
                        backup = backup[romeon];
                        kiloes = kiloes.bind(zuuluu)(backup);
                        backup = kiloes.checkForStallReport;
                        offset = backup.bind(kiloes)();
 247:
                        foxtra = offset;
                        if(!(yankee != offset)) { _fun00014_ip = 413; continue _fun00013 }
 257:
                        backup = report._lastSessionId;
                        offset = verify;
                        if(!(backup !== offset)) { _fun00014_ip = 288; continue _fun00013 }
 270:
                        offset = verify;
                        report['_lastSessionId'] = offset;
                        offset = 3;
                        report['_analyticsReportsRemaining'] = offset;
 288:
                        offset = report._analyticsReportsRemaining;
                        backup = parseFloat(offset);
                        offset = backup - 1;
                        report['_analyticsReportsRemaining'] = offset;
                        offset = 0;
                        if(!(backup > offset)) { _fun00014_ip = 339; continue _fun00013 }
 312:
                        kiloes = report.reportStall;
                        vacuum = foxtra;
                        ctrled = verify;
                        update = report._analyticsReportsRemaining;
                        sequen = report;
                        source = false;
                        verify = sequen[kiloes](vacuum, ctrled, source, update, echoed);
 339:
                        verify = report._analyticsReportsRemaining;
                        if(!(offset === verify)) { _fun00014_ip = 413; continue _fun00013 }
 349:
                        verify = report.stopWatchdog;
                        verify = verify.bind(report)();
                        foxtra = _closure1_slot1;
                        verify = _closure1_slot2;
                        verify = verify[romeon];
                        verify = foxtra.bind(zuuluu)(verify);
                        verify = yankee == verify;
                        offset = verify;
                        if(verify) { _fun00014_ip = 413; continue _fun00013 }
 386:
                        yankee = _closure1_slot1;
                        verify = _closure1_slot2;
                        verify = verify[romeon];
                        yankee = yankee.bind(zuuluu)(verify);
                        verify = yankee.disable;
                        offset = verify.bind(yankee)();
 413:
                        verify = report._enabled;
                        if(!verify) { _fun00014_ip = 453; continue _fun00013 }
 422:
                        verify = global;
                        verify = verify.setTimeout;
                        option = _closure1_slot12;
                        golfie = function() {
                            michal = _closure4_slot0;
                            entity = michal.ping;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        golfie = verify.bind(zuuluu)(golfie, option);
                        report['_timeoutId'] = golfie;
 453: // try_end0
                        _fun00014_ip = 513; continue _fun00013;
 455: // try_end1
                        golfie = true;
                        report['_pingCompleted'] = golfie;
                        return oscard;
 466:
                        oscard = true;
                        report['_pingCompleted'] = oscard;
                        return tangon;
 477: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        oscard = _closure1_slot1;
                        option = _closure1_slot2;
                        tangon = 12;
                        tangon = option[tangon];
                        oscard = oscard.bind(zuuluu)(tangon);
                        tangon = oscard.captureException;
                        tangon = tangon.bind(oscard)(golfie);
 513: // try_end2
                        tangon = true;
                        report['_pingCompleted'] = tangon;
                        return zuuluu;
 524: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        tangon = true;
                        report['_pingCompleted'] = tangon;
                        throw zuuluu;
 536:
                        return michal;
 539:
                        return entity;
                    }
                };
                michal = entity.next;
                michal = michal.bind(entity)();
                return entity;
            };
            golfie = option.bind(zuuluu)(golfie);
            var _closure2_slot2 = golfie;
            golfie = function() { // Original name: ping
                entity = undefined;
                tangon = _closure2_slot2;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'startWatchdog';
            report['key'] = golfie;
            golfie = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        StartGenerator();
                        report = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00016_ip = 249; continue _fun00015 }
 13:
                        michal = report._timeoutId;
                        zuuluu = null;
                        if(!(zuuluu == michal)) { _fun00016_ip = 241; continue _fun00015 }
 28:
                        tangon = _closure1_slot1;
                        michal = _closure1_slot2;
                        offset = 11;
                        michal = michal[offset];
                        verify = undefined;
                        michal = tangon.bind(verify)(michal);
                        if(!(zuuluu != michal)) { _fun00016_ip = 241; continue _fun00015 }
 60:
                        michal = report.getCurrentSessionId;
                        michal = michal.bind(report)();
                        SaveGenerator(address=74);
 72:
                        return michal;
 74:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00016_ip = 246; continue _fun00015 }
 83:
                        tangon = report._lastSessionId;
                        if(!(tangon === michal)) { _fun00016_ip = 108; continue _fun00015 }
 93:
                        golfie = report._analyticsReportsRemaining;
                        tangon = 0;
                        if(!(tangon !== golfie)) { _fun00016_ip = 241; continue _fun00015 }
 108:
                        option = _closure1_slot11;
                        golfie = option.info;
                        tangon = 'startWatchdog()';
                        tangon = golfie.bind(option)(tangon);
                        tangon = true;
                        report['_enabled'] = tangon;
                        golfie = report._pingCompleted;
                        if(!golfie) { _fun00016_ip = 230; continue _fun00015 }
 146:
                        option = _closure1_slot1;
                        golfie = _closure1_slot2;
                        golfie = golfie[offset];
                        golfie = option.bind(verify)(golfie);
                        option = zuuluu == golfie;
                        golfie = undefined;
                        if(option) { _fun00016_ip = 199; continue _fun00015 }
 172:
                        option = _closure1_slot1;
                        oscard = _closure1_slot2;
                        oscard = oscard[offset];
                        option = option.bind(verify)(oscard);
                        oscard = option.checkForStallReport;
                        golfie = oscard.bind(option)();
 199:
                        if(!(zuuluu != golfie)) { _fun00016_ip = 230; continue _fun00015 }
 203:
                        oscard = report.reportStall;
                        yankee = -1;
                        kiloes = report;
                        backup = golfie;
                        foxtra = michal;
                        romeon = true;
                        zuuluu = kiloes[oscard](backup, foxtra, romeon, yankee, offset);
 230:
                        zuuluu = report.ping;
                        zuuluu = zuuluu.bind(report)(tangon);
 241:
                        zuuluu = undefined;
                        return zuuluu;
 246:
                        return michal;
 249:
                        return entity;
                    }
                };
                return entity;
            };
            golfie = option.bind(zuuluu)(golfie);
            var _closure2_slot1 = golfie;
            golfie = function() { // Original name: startWatchdog
                entity = undefined;
                tangon = _closure2_slot1;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            report['value'] = golfie;
            entity[3] = report;
            report = {};
            golfie = 'stopWatchdog';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                zuuluu = this;
                tangon = _closure1_slot11;
                michal = tangon.info;
                entity = 'stopWatchdog()';
                entity = michal.bind(tangon)(entity);
                entity = false;
                zuuluu['_enabled'] = entity;
                entity = global;
                tangon = entity.clearTimeout;
                michal = zuuluu._timeoutId;
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                michal = null;
                zuuluu['_timeoutId'] = michal;
                return entity;
            };
            report['value'] = golfie;
            entity[4] = report;
            report = {};
            golfie = 'reportStall';
            report['key'] = golfie;
            golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 13;
                    michal = offset[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.track;
                    michal = _closure1_slot10;
                    zuuluu = michal.APP_JS_STALLED;
                    michal = {};
                    verify = _closure1_slot0;
                    golfie = 14;
                    golfie = offset[golfie];
                    verify = verify.bind(entity)(golfie);
                    golfie = verify.getDeviceMetadata;
                    romeon = golfie.bind(verify)();
                    foxtra = michal;
                    golfie = copyDataProperties(foxtra, romeon);
                    verify = 1;
                    golfie = 'version';
                    michal[golfie] = verify;
                    verify = oscard.stallTime;
                    golfie = 'stall_time';
                    michal[golfie] = verify;
                    verify = argBaz;
                    golfie = 'is_previous';
                    michal[golfie] = verify;
                    verify = argCor;
                    golfie = 'reports_remaining';
                    michal[golfie] = verify;
                    yankee = oscard.sessionId;
                    verify = argBar;
                    offset = null;
                    if(!(yankee !== verify)) { _fun00018_ip = 158; continue _fun00017 }
 152:
                    offset = oscard.sessionId;
 158:
                    verify = 'stall_session_id';
                    michal[verify] = offset;
                    option = _closure1_slot13;
                    golfie = null;
                    if(!option) { _fun00018_ip = 184; continue _fun00017 }
 178:
                    golfie = oscard.trace;
 184:
                    oscard = 'trace';
                    michal[oscard] = golfie;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[5] = report;
            report = {};
            golfie = 'getCurrentSessionId';
            report['key'] = golfie;
            golfie = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        tangon = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00020_ip = 172; continue _fun00019 }
 13:
                        michal = tangon._cachedSession;
                        zuuluu = null;
                        michal = zuuluu == michal;
                        if(michal) { _fun00020_ip = 70; continue _fun00019 }
 28:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        report = 15;
                        oscard = oscard[report];
                        report = undefined;
                        golfie = golfie.bind(report)(oscard);
                        oscard = golfie.isSessionExpired;
                        report = tangon._cachedSession;
                        michal = oscard.bind(golfie)(report);
 70:
                        if(!michal) { _fun00020_ip = 145; continue _fun00019 }
 73:
                        golfie = _closure1_slot11;
                        oscard = golfie.log;
                        report = 'Refreshing session...';
                        report = oscard.bind(golfie)(report);
                        oscard = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 16;
                        report = report[michal];
                        michal = undefined;
                        report = oscard.bind(michal)(report);
                        michal = report.getSession;
                        michal = michal.bind(report)();
                        SaveGenerator(address=133);
 131:
                        return michal;
 133:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00020_ip = 169; continue _fun00019 }
 139:
                        tangon['_cachedSession'] = michal;
 145:
                        tangon = tangon._cachedSession;
                        report = zuuluu == tangon;
                        zuuluu = undefined;
                        if(report) { _fun00020_ip = 166; continue _fun00019 }
 160:
                        zuuluu = tangon.uuid;
 166:
                        return zuuluu;
 169:
                        return michal;
 172:
                        return entity;
                    }
                };
                return entity;
            };
            golfie = option.bind(zuuluu)(golfie);
            var _closure2_slot0 = golfie;
            oscard = function() { // Original name: getCurrentSessionId
                entity = undefined;
                tangon = _closure2_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            report['value'] = oscard;
            entity[6] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        michal = michal.bind(entity)(tangon);
        tangon = michal.prototype;
        tangon = Object.create(tangon, {constructor: {value: michal}});
        kiloes = tangon;
        michal = new kiloes[michal](backup);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 18;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/js_watchdog/native/JSWatchdogManager.android.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();