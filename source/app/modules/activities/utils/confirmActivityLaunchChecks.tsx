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
                    if(zuuluu) { _fun00002_ip = 362; continue _fun00001 }
 13:
                    offset = michal.applicationId;
                    yankee = michal.channelId;
                    tangon = michal.guildId;
                    report = michal.isContextless;
                    zuuluu = undefined;
                    golfie = undefined;
                    SaveGenerator(address=42);
 40:
                    return zuuluu;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 359; continue _fun00001 }
 51: // try_start_0
                    verify = _closure1_slot1;
                    romeon = _closure1_slot2;
                    oscard = 4;
                    oscard = romeon[oscard];
                    romeon = verify.bind(zuuluu)(oscard);
                    verify = offset;
                    oscard = yankee;
                    oscard = romeon.bind(zuuluu)(verify, oscard);
                    SaveGenerator(address=90);
 88:
                    return oscard;
 90:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 99; continue _fun00001 }
 96: // try_end0
                    return oscard;
 99:
                    return oscard;
 102: // catch_target0
                    CatchBlockStart(arg_register=7);
                    if(report) { _fun00002_ip = 190; continue _fun00001 }
 107:
                    report = tangon;
                    tangon = null;
                    if(!(tangon == report)) { _fun00002_ip = 153; continue _fun00001 }
 116:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    tangon = tangon.EmbeddedActivityLocationKind;
                    tangon = tangon.PRIVATE_CHANNEL;
                    _fun00002_ip = 188; continue _fun00001;
 153:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 5;
                    report = verify[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.EmbeddedActivityLocationKind;
                    tangon = report.GUILD_CHANNEL;
 188:
                    _fun00002_ip = 225; continue _fun00001;
 190:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 5;
                    report = verify[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.EmbeddedActivityLocationKind;
                    tangon = report.CONTEXTLESS;
 225:
                    golfie = tangon;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 6;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {'type': 'EMBEDDED_ACTIVITY_LAUNCH_FAIL', 'nonce': ''};
                    tangon['applicationId'] = offset;
                    romeon = yankee;
                    offset = null;
                    romeon = offset != romeon;
                    if(!romeon) { _fun00002_ip = 289; continue _fun00001 }
 286:
                    offset = yankee;
 289:
                    tangon['channelId'] = offset;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    verify = 7;
                    verify = yankee[verify];
                    verify = offset.bind(zuuluu)(verify);
                    offset = verify.APIError;
                    backup = option;
                    verify = offset.prototype;
                    verify = Object.create(verify, {constructor: {value: offset}});
                    kiloes = verify;
                    option = new kiloes[offset](backup, foxtra);
                    option = option instanceof Object ? option : verify;
                    tangon['error'] = option;
                    tangon['locationKind'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 359:
                    return michal;
 362:
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
                    if(tangon) { _fun00008_ip = 288; continue _fun00007 }
 15:
                    oscard = michal.application;
                    offset = michal.applicationId;
                    romeon = michal.channel;
                    var _closure4_slot0 = romeon;
                    report = michal.user;
                    tangon = michal.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot1 = tangon;
                    verify = michal.isContextless;
                    tangon = undefined;
                    var _closure4_slot2 = tangon;
                    SaveGenerator(address=65);
 63:
                    return tangon;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 285; continue _fun00007 }
 74:
                    golfie = report.nsfwAllowed;
                    report = null;
                    if(!(report == golfie)) { _fun00008_ip = 272; continue _fun00007 }
 89:
                    if(!(report == oscard)) { _fun00008_ip = 185; continue _fun00007 }
 93:
                    option = _closure1_slot7;
                    golfie = {};
                    golfie['applicationId'] = offset;
                    yankee = report == romeon;
                    offset = undefined;
                    if(yankee) { _fun00008_ip = 120; continue _fun00007 }
 115:
                    offset = romeon.id;
 120:
                    golfie['channelId'] = offset;
                    offset = report == romeon;
                    yankee = undefined;
                    if(offset) { _fun00008_ip = 143; continue _fun00007 }
 133:
                    offset = romeon.getGuildId;
                    yankee = offset.bind(romeon)();
 143:
                    romeon = report != yankee;
                    offset = undefined;
                    if(!romeon) { _fun00008_ip = 155; continue _fun00007 }
 152:
                    offset = yankee;
 155:
                    golfie['guildId'] = offset;
                    golfie['isContextless'] = verify;
                    golfie = option.bind(tangon)(golfie);
                    SaveGenerator(address=173);
 171:
                    return golfie;
 173:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    oscard = golfie;
                    if(!option) { _fun00008_ip = 185; continue _fun00007 }
 182:
                    return golfie;
 185:
                    _closure4_slot2 = oscard;
                    if(!(report != oscard)) { _fun00008_ip = 280; continue _fun00007 }
 193:
                    oscard = oscard.embeddedActivityConfig;
                    golfie = report == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00008_ip = 214; continue _fun00007 }
 208:
                    tangon = oscard.requires_age_gate;
 214:
                    if(!(report != tangon)) { _fun00008_ip = 272; continue _fun00007 }
 218:
                    if(!tangon) { _fun00008_ip = 272; continue _fun00007 }
 221:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    foxtra = function(argFoo) {
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
                    backup = tangon;
                    zuuluu = new backup[report](foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    SaveGenerator(address=258);
 256:
                    return zuuluu;
 258:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 277; continue _fun00007 }
 264:
                    if(zuuluu) { _fun00008_ip = 272; continue _fun00007 }
 267:
                    tangon = false;
                    return tangon;
 272:
                    tangon = true;
                    return tangon;
 277:
                    return zuuluu;
 280:
                    zuuluu = false;
                    return zuuluu;
 285:
                    return michal;
 288:
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
                    if(zuuluu) { _fun00012_ip = 319; continue _fun00011 }
 15:
                    tangon = michal.application;
                    option = michal.applicationId;
                    foxtra = michal.channel;
                    report = michal.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot0 = report;
                    verify = michal.isContextless;
                    offset = undefined;
                    var _closure4_slot1 = offset;
                    SaveGenerator(address=56);
 54:
                    return offset;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 316; continue _fun00011 }
 65:
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00012_ip = 163; continue _fun00011 }
 71:
                    golfie = _closure1_slot7;
                    report = {};
                    report['applicationId'] = option;
                    romeon = zuuluu == foxtra;
                    yankee = undefined;
                    if(romeon) { _fun00012_ip = 98; continue _fun00011 }
 93:
                    yankee = foxtra.id;
 98:
                    report['channelId'] = yankee;
                    yankee = zuuluu == foxtra;
                    romeon = undefined;
                    if(yankee) { _fun00012_ip = 121; continue _fun00011 }
 111:
                    yankee = foxtra.getGuildId;
                    romeon = yankee.bind(foxtra)();
 121:
                    foxtra = zuuluu != romeon;
                    yankee = undefined;
                    if(!foxtra) { _fun00012_ip = 133; continue _fun00011 }
 130:
                    yankee = romeon;
 133:
                    report['guildId'] = yankee;
                    report['isContextless'] = verify;
                    report = golfie.bind(offset)(report);
                    SaveGenerator(address=151);
 149:
                    return report;
 151:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    tangon = report;
                    if(!golfie) { _fun00012_ip = 163; continue _fun00011 }
 160:
                    return report;
 163:
                    _closure4_slot1 = tangon;
                    zuuluu = zuuluu != tangon;
                    if(!zuuluu) { _fun00012_ip = 313; continue _fun00011 }
 177:
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
                    if(!golfie) { _fun00012_ip = 242; continue _fun00011 }
 233:
                    tangon = tangon.isVerified;
                    golfie = !tangon;
 242:
                    tangon = !golfie;
                    if(!golfie) { _fun00012_ip = 310; continue _fun00011 }
 248:
                    golfie = _closure1_slot5;
                    report = golfie.hasActivityEverBeenLaunched;
                    report = report.bind(golfie)(option);
                    golfie = !report;
                    report = !golfie;
                    if(!golfie) { _fun00012_ip = 307; continue _fun00011 }
 274:
                    golfie = global;
                    option = golfie.Promise;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    kiloes = function(argFoo) {
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
                    sizing = golfie;
                    oscard = new sizing[option](kiloes, backup);
                    report = oscard instanceof Object ? oscard : golfie;
 307:
                    tangon = report;
 310:
                    zuuluu = tangon;
 313:
                    return zuuluu;
 316:
                    return michal;
 319:
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