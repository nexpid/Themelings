// app/modules/activities/utils/confirmActivityLaunchChecks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: getOrFetchApplicationForLaunch
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _getOrFetchApplicationForLaunch
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 331; continue _fun00001 }
 13:
                    romeon = michal.applicationId;
                    foxtra = michal.channelId;
                    yankee = michal.guildId;
                    zuuluu = undefined;
                    golfie = undefined;
                    SaveGenerator(address=36);
 34:
                    return zuuluu;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 328; continue _fun00001 }
 45: // try_start_0
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 4;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = romeon;
                    tangon = foxtra;
                    tangon = oscard.bind(zuuluu)(report, tangon);
                    SaveGenerator(address=84);
 82:
                    return tangon;
 84:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 93; continue _fun00001 }
 90: // try_end0
                    return tangon;
 93:
                    return tangon;
 96: // catch_target0
                    CatchBlockStart(arg_register=7);
                    tangon = yankee;
                    offset = null;
                    if(!(offset == tangon)) { _fun00002_ip = 144; continue _fun00001 }
 107:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    tangon = tangon.EmbeddedActivityLocationKind;
                    tangon = tangon.PRIVATE_CHANNEL;
                    _fun00002_ip = 179; continue _fun00001;
 144:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 5;
                    report = verify[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.EmbeddedActivityLocationKind;
                    tangon = report.GUILD_CHANNEL;
 179:
                    golfie = tangon;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 6;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {'type': 'EMBEDDED_ACTIVITY_LAUNCH_FAIL', 'nonce': ''};
                    tangon['applicationId'] = romeon;
                    romeon = foxtra;
                    backup = offset != romeon;
                    romeon = null;
                    if(!backup) { _fun00002_ip = 239; continue _fun00001 }
 236:
                    romeon = foxtra;
 239:
                    tangon['channelId'] = romeon;
                    romeon = yankee;
                    romeon = offset != romeon;
                    offset = null;
                    if(!romeon) { _fun00002_ip = 258; continue _fun00001 }
 255:
                    offset = yankee;
 258:
                    tangon['guildId'] = offset;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    verify = 7;
                    verify = yankee[verify];
                    verify = offset.bind(zuuluu)(verify);
                    offset = verify.APIError;
                    sizing = option;
                    verify = offset.prototype;
                    verify = Object.create(verify, {constructor: {value: offset}});
                    output = verify;
                    option = new output[offset](sizing, kiloes);
                    option = option instanceof Object ? option : verify;
                    tangon['error'] = option;
                    tangon['locationKind'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 328:
                    return michal;
 331:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: _confirmActivityChange
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 122; continue _fun00003 }
 12:
                    report = michal.currentEmbeddedApplication;
                    var _closure4_slot0 = report;
                    oscard = michal.shouldClosePopoutOnLeaveCurrentEmbeddedApplication;
                    var _closure4_slot1 = oscard;
                    michal = michal.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot2 = michal;
                    michal = undefined;
                    SaveGenerator(address=48);
 46:
                    return michal;
 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 119; continue _fun00003 }
 54:
                    tangon = null;
                    if(!(tangon != report)) { _fun00004_ip = 111; continue _fun00003 }
 60:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    golfie = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            option = argFoo;
                            var _closure5_slot0 = option;
                            zuuluu = _closure1_slot5;
                            entity = zuuluu.getSelfEmbeddedActivities;
                            oscard = entity.bind(zuuluu)();
                            report = oscard.get;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            report = report.bind(oscard)(entity);
                            var _closure5_slot1 = report;
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            entity = 8;
                            oscard = oscard[entity];
                            entity = undefined;
                            offset = golfie.bind(entity)(oscard);
                            verify = offset.getEmbeddedActivityLocationChannelId;
                            golfie = null;
                            yankee = golfie == report;
                            oscard = undefined;
                            if(yankee) { _fun00006_ip = 96; continue _fun00005 }
 91:
                            oscard = report.location;
 96:
                            offset = verify.bind(offset)(oscard);
                            verify = _closure1_slot4;
                            oscard = verify.getChannel;
                            oscard = oscard.bind(verify)(offset);
                            if(!(golfie != report)) { _fun00006_ip = 123; continue _fun00005 }
 119:
                            if(!(golfie == oscard)) { _fun00006_ip = 132; continue _fun00005 }
 123:
                            report = true;
                            report = option.bind(entity)(report);
                            _fun00006_ip = 191; continue _fun00005;
 132:
                            report = _closure4_slot2;
                            if(!(golfie != report)) { _fun00006_ip = 148; continue _fun00005 }
 140:
                            report = _closure4_slot2;
                            report = report.bind(entity)();
 148:
                            report = _closure1_slot1;
                            golfie = _closure1_slot2;
                            tangon = 9;
                            tangon = golfie[tangon];
                            report = report.bind(entity)(tangon);
                            kiloes = _closure4_slot0;
                            foxtra = function() {
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 10;
                                michal = michal[entity];
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                report = michal.bind(entity)();
                                tangon = report.leaveActivity;
                                zuuluu = {};
                                oscard = _closure5_slot1;
                                oscard = oscard.location;
                                zuuluu['location'] = oscard;
                                golfie = _closure4_slot0;
                                golfie = golfie.id;
                                zuuluu['applicationId'] = golfie;
                                oscard = _closure4_slot1;
                                zuuluu['shouldClosePopout'] = oscard;
                                zuuluu = tangon.bind(report)(zuuluu);
                                zuuluu = _closure5_slot0;
                                michal = true;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            romeon = function() {
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = false;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            sizing = undefined;
                            backup = oscard;
                            michal = sizing[report](kiloes, backup, foxtra, romeon, yankee);
 191:
                            return entity;
                        }
                    };
                    option = tangon;
                    zuuluu = new option[report](golfie, oscard);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    SaveGenerator(address=97);
 95:
                    return zuuluu;
 97:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 116; continue _fun00003 }
 103:
                    if(zuuluu) { _fun00004_ip = 111; continue _fun00003 }
 106:
                    tangon = false;
                    return tangon;
 111:
                    tangon = true;
                    return tangon;
 116:
                    return zuuluu;
 119:
                    return michal;
 122:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _confirmActivityAgeGate
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 277; continue _fun00007 }
 15:
                    oscard = michal.application;
                    verify = michal.applicationId;
                    yankee = michal.channel;
                    var _closure4_slot0 = yankee;
                    report = michal.user;
                    michal = michal.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot1 = michal;
                    tangon = undefined;
                    var _closure4_slot2 = tangon;
                    SaveGenerator(address=59);
 57:
                    return tangon;
 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 274; continue _fun00007 }
 68:
                    golfie = report.nsfwAllowed;
                    report = null;
                    if(!(report == golfie)) { _fun00008_ip = 261; continue _fun00007 }
 83:
                    if(!(report == oscard)) { _fun00008_ip = 174; continue _fun00007 }
 87:
                    option = _closure1_slot7;
                    golfie = {};
                    golfie['applicationId'] = verify;
                    offset = report == yankee;
                    verify = undefined;
                    if(offset) { _fun00008_ip = 114; continue _fun00007 }
 109:
                    verify = yankee.id;
 114:
                    golfie['channelId'] = verify;
                    verify = report == yankee;
                    offset = undefined;
                    if(verify) { _fun00008_ip = 137; continue _fun00007 }
 127:
                    verify = yankee.getGuildId;
                    offset = verify.bind(yankee)();
 137:
                    yankee = report != offset;
                    verify = undefined;
                    if(!yankee) { _fun00008_ip = 149; continue _fun00007 }
 146:
                    verify = offset;
 149:
                    golfie['guildId'] = verify;
                    golfie = option.bind(tangon)(golfie);
                    SaveGenerator(address=162);
 160:
                    return golfie;
 162:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    oscard = golfie;
                    if(!option) { _fun00008_ip = 174; continue _fun00007 }
 171:
                    return golfie;
 174:
                    _closure4_slot2 = oscard;
                    if(!(report != oscard)) { _fun00008_ip = 269; continue _fun00007 }
 182:
                    oscard = oscard.embeddedActivityConfig;
                    golfie = report == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00008_ip = 203; continue _fun00007 }
 197:
                    tangon = oscard.requires_age_gate;
 203:
                    if(!(report != tangon)) { _fun00008_ip = 261; continue _fun00007 }
 207:
                    if(!tangon) { _fun00008_ip = 261; continue _fun00007 }
 210:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    romeon = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            entity = _closure4_slot1;
                            option = null;
                            if(!(option != entity)) { _fun00010_ip = 32; continue _fun00009 }
 22:
                            michal = _closure4_slot1;
                            entity = undefined;
                            entity = michal.bind(entity)();
 32:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 11;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.confirmActivityAgeGateAlert;
                            michal = {};
                            oscard = _closure4_slot2;
                            michal['application'] = oscard;
                            oscard = _closure4_slot0;
                            option = option == oscard;
                            oscard = undefined;
                            if(option) { _fun00010_ip = 95; continue _fun00009 }
 86:
                            golfie = _closure4_slot0;
                            oscard = golfie.id;
 95:
                            michal['channelId'] = oscard;
                            oscard = function() { // Original name: onAgree
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = true;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            michal['onAgree'] = oscard;
                            report = function() { // Original name: onDisagree
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = false;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            michal['onDisagree'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    foxtra = tangon;
                    zuuluu = new foxtra[report](romeon, yankee);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    SaveGenerator(address=247);
 245:
                    return zuuluu;
 247:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 266; continue _fun00007 }
 253:
                    if(zuuluu) { _fun00008_ip = 261; continue _fun00007 }
 256:
                    tangon = false;
                    return tangon;
 261:
                    tangon = true;
                    return tangon;
 266:
                    return zuuluu;
 269:
                    zuuluu = false;
                    return zuuluu;
 274:
                    return michal;
 277:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _confirmExternalAppLaunch
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 308; continue _fun00011 }
 15:
                    tangon = michal.application;
                    option = michal.applicationId;
                    romeon = michal.channel;
                    michal = michal.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot0 = michal;
                    offset = undefined;
                    var _closure4_slot1 = offset;
                    SaveGenerator(address=50);
 48:
                    return offset;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 305; continue _fun00011 }
 59:
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00012_ip = 152; continue _fun00011 }
 65:
                    golfie = _closure1_slot7;
                    report = {};
                    report['applicationId'] = option;
                    yankee = zuuluu == romeon;
                    verify = undefined;
                    if(yankee) { _fun00012_ip = 92; continue _fun00011 }
 87:
                    verify = romeon.id;
 92:
                    report['channelId'] = verify;
                    verify = zuuluu == romeon;
                    yankee = undefined;
                    if(verify) { _fun00012_ip = 115; continue _fun00011 }
 105:
                    verify = romeon.getGuildId;
                    yankee = verify.bind(romeon)();
 115:
                    romeon = zuuluu != yankee;
                    verify = undefined;
                    if(!romeon) { _fun00012_ip = 127; continue _fun00011 }
 124:
                    verify = yankee;
 127:
                    report['guildId'] = verify;
                    report = golfie.bind(offset)(report);
                    SaveGenerator(address=140);
 138:
                    return report;
 140:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    tangon = report;
                    if(!golfie) { _fun00012_ip = 152; continue _fun00011 }
 149:
                    return report;
 152:
                    _closure4_slot1 = tangon;
                    zuuluu = zuuluu != tangon;
                    if(!zuuluu) { _fun00012_ip = 302; continue _fun00011 }
 166:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golfie = 12;
                    golfie = yankee[golfie];
                    yankee = verify.bind(offset)(golfie);
                    offset = yankee.hasFlag;
                    verify = tangon.flags;
                    golfie = _closure1_slot6;
                    golfie = golfie.EMBEDDED_RELEASED;
                    golfie = offset.bind(yankee)(verify, golfie);
                    golfie = !golfie;
                    if(!golfie) { _fun00012_ip = 231; continue _fun00011 }
 222:
                    tangon = tangon.isVerified;
                    golfie = !tangon;
 231:
                    tangon = !golfie;
                    if(!golfie) { _fun00012_ip = 299; continue _fun00011 }
 237:
                    golfie = _closure1_slot5;
                    report = golfie.hasActivityEverBeenLaunched;
                    report = report.bind(golfie)(option);
                    golfie = !report;
                    report = !golfie;
                    if(!golfie) { _fun00012_ip = 296; continue _fun00011 }
 263:
                    golfie = global;
                    option = golfie.Promise;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    backup = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            michal = _closure4_slot0;
                            entity = null;
                            if(!(entity != michal)) { _fun00014_ip = 32; continue _fun00013 }
 22:
                            michal = _closure4_slot0;
                            entity = undefined;
                            entity = michal.bind(entity)();
 32:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 13;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.confirmExternalAppLaunchAlert;
                            michal = {};
                            oscard = _closure4_slot1;
                            michal['application'] = oscard;
                            oscard = function() { // Original name: onConfirm
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = true;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            michal['onConfirm'] = oscard;
                            report = function() { // Original name: onCancel
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = false;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            michal['onCancel'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    kiloes = golfie;
                    oscard = new kiloes[option](backup, foxtra);
                    report = oscard instanceof Object ? oscard : golfie;
 296:
                    tangon = report;
 299:
                    zuuluu = tangon;
 302:
                    return zuuluu;
 305:
                    return michal;
 308:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _confirmActivityLaunchChecks
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 146; continue _fun00015 }
 15:
                    zuuluu = {};
                    michal = oscard.currentEmbeddedApplication;
                    zuuluu['currentEmbeddedApplication'] = michal;
                    michal = oscard.shouldClosePopoutOnLeaveCurrentEmbeddedApplication;
                    zuuluu['shouldClosePopoutOnLeaveCurrentEmbeddedApplication'] = michal;
                    michal = oscard.onConfirmActivityLaunchChecksAlertOpen;
                    zuuluu['onConfirmActivityLaunchChecksAlertOpen'] = michal;
                    michal = function() { // Original name: confirmActivityChange
                        entity = undefined;
                        tangon = _closure1_slot9;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    report = undefined;
                    michal = michal.bind(report)(zuuluu);
                    SaveGenerator(address=66);
 64:
                    return michal;
 66:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 143; continue _fun00015 }
 72:
                    if(michal) { _fun00016_ip = 80; continue _fun00015 }
 75:
                    zuuluu = false;
                    return zuuluu;
 80:
                    zuuluu = function() { // Original name: confirmActivityAgeGate
                        entity = undefined;
                        tangon = _closure1_slot10;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(report)(oscard);
                    SaveGenerator(address=94);
 92:
                    return zuuluu;
 94:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00016_ip = 140; continue _fun00015 }
 100:
                    if(zuuluu) { _fun00016_ip = 108; continue _fun00015 }
 103:
                    golfie = false;
                    return golfie;
 108:
                    tangon = function() { // Original name: confirmExternalAppLaunch
                        entity = undefined;
                        tangon = _closure1_slot11;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(oscard);
                    SaveGenerator(address=122);
 120:
                    return tangon;
 122:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00016_ip = 137; continue _fun00015 }
 128:
                    report = !tangon;
                    report = !report;
                    return report;
 137:
                    return tangon;
 140:
                    return zuuluu;
 143:
                    return michal;
 146:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ApplicationFlags;
    var _closure1_slot6 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/confirmActivityLaunchChecks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: confirmActivityLaunchChecks
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['confirmActivityLaunchChecks'] = michal;
    return entity;
})();