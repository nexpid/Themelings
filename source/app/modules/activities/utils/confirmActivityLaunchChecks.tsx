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
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 102; continue _fun00003 }
 9:
                    michal = argFoo;
                    report = michal.currentEmbeddedApplication;
                    var _closure4_slot0 = report;
                    michal = undefined;
                    SaveGenerator(address=28);
 26:
                    return michal;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 99; continue _fun00003 }
 34:
                    tangon = null;
                    if(!(tangon != report)) { _fun00004_ip = 91; continue _fun00003 }
 40:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    oscard = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            golfie = argFoo;
                            var _closure5_slot0 = golfie;
                            zuuluu = _closure1_slot5;
                            entity = zuuluu.getSelfEmbeddedActivities;
                            oscard = entity.bind(zuuluu)();
                            report = oscard.get;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            option = report.bind(oscard)(entity);
                            var _closure5_slot1 = option;
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 8;
                            report = report[entity];
                            entity = undefined;
                            offset = oscard.bind(entity)(report);
                            verify = offset.getEmbeddedActivityLocationChannelId;
                            report = null;
                            yankee = report == option;
                            oscard = undefined;
                            if(yankee) { _fun00006_ip = 96; continue _fun00005 }
 91:
                            oscard = option.location;
 96:
                            offset = verify.bind(offset)(oscard);
                            verify = _closure1_slot4;
                            oscard = verify.getChannel;
                            oscard = oscard.bind(verify)(offset);
                            if(!(report != option)) { _fun00006_ip = 123; continue _fun00005 }
 119:
                            if(!(report == oscard)) { _fun00006_ip = 132; continue _fun00005 }
 123:
                            report = true;
                            report = golfie.bind(entity)(report);
                            _fun00006_ip = 175; continue _fun00005;
 132:
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
                                oscard = _closure4_slot0;
                                oscard = oscard.id;
                                zuuluu['applicationId'] = oscard;
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
 175:
                            return entity;
                        }
                    };
                    golfie = tangon;
                    zuuluu = new golfie[report](oscard, report);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    SaveGenerator(address=77);
 75:
                    return zuuluu;
 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 96; continue _fun00003 }
 83:
                    if(zuuluu) { _fun00004_ip = 91; continue _fun00003 }
 86:
                    tangon = false;
                    return tangon;
 91:
                    tangon = true;
                    return tangon;
 96:
                    return zuuluu;
 99:
                    return michal;
 102:
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
                    if(tangon) { _fun00008_ip = 278; continue _fun00007 }
 15:
                    oscard = michal.application;
                    offset = michal.applicationId;
                    romeon = michal.channel;
                    var _closure4_slot0 = romeon;
                    report = michal.user;
                    verify = michal.isContextless;
                    tangon = undefined;
                    var _closure4_slot1 = tangon;
                    SaveGenerator(address=55);
 53:
                    return tangon;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 275; continue _fun00007 }
 64:
                    golfie = report.nsfwAllowed;
                    report = null;
                    if(!(report == golfie)) { _fun00008_ip = 262; continue _fun00007 }
 79:
                    if(!(report == oscard)) { _fun00008_ip = 175; continue _fun00007 }
 83:
                    option = _closure1_slot7;
                    golfie = {};
                    golfie['applicationId'] = offset;
                    yankee = report == romeon;
                    offset = undefined;
                    if(yankee) { _fun00008_ip = 110; continue _fun00007 }
 105:
                    offset = romeon.id;
 110:
                    golfie['channelId'] = offset;
                    offset = report == romeon;
                    yankee = undefined;
                    if(offset) { _fun00008_ip = 133; continue _fun00007 }
 123:
                    offset = romeon.getGuildId;
                    yankee = offset.bind(romeon)();
 133:
                    romeon = report != yankee;
                    offset = undefined;
                    if(!romeon) { _fun00008_ip = 145; continue _fun00007 }
 142:
                    offset = yankee;
 145:
                    golfie['guildId'] = offset;
                    golfie['isContextless'] = verify;
                    golfie = option.bind(tangon)(golfie);
                    SaveGenerator(address=163);
 161:
                    return golfie;
 163:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    oscard = golfie;
                    if(!option) { _fun00008_ip = 175; continue _fun00007 }
 172:
                    return golfie;
 175:
                    _closure4_slot1 = oscard;
                    if(!(report != oscard)) { _fun00008_ip = 270; continue _fun00007 }
 183:
                    oscard = oscard.embeddedActivityConfig;
                    golfie = report == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00008_ip = 204; continue _fun00007 }
 198:
                    tangon = oscard.requires_age_gate;
 204:
                    if(!(report != tangon)) { _fun00008_ip = 262; continue _fun00007 }
 208:
                    if(!tangon) { _fun00008_ip = 262; continue _fun00007 }
 211:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    foxtra = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 11;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.confirmActivityAgeGateAlert;
                            michal = {};
                            oscard = _closure4_slot1;
                            michal['application'] = oscard;
                            option = _closure4_slot0;
                            oscard = null;
                            option = oscard == option;
                            oscard = undefined;
                            if(option) { _fun00010_ip = 77; continue _fun00009 }
 68:
                            golfie = _closure4_slot0;
                            oscard = golfie.id;
 77:
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
                    SaveGenerator(address=248);
 246:
                    return zuuluu;
 248:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 267; continue _fun00007 }
 254:
                    if(zuuluu) { _fun00008_ip = 262; continue _fun00007 }
 257:
                    tangon = false;
                    return tangon;
 262:
                    tangon = true;
                    return tangon;
 267:
                    return zuuluu;
 270:
                    zuuluu = false;
                    return zuuluu;
 275:
                    return michal;
 278:
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
                    if(zuuluu) { _fun00012_ip = 309; continue _fun00011 }
 15:
                    tangon = michal.application;
                    option = michal.applicationId;
                    foxtra = michal.channel;
                    verify = michal.isContextless;
                    offset = undefined;
                    var _closure4_slot0 = offset;
                    SaveGenerator(address=46);
 44:
                    return offset;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 306; continue _fun00011 }
 55:
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00012_ip = 153; continue _fun00011 }
 61:
                    golfie = _closure1_slot7;
                    report = {};
                    report['applicationId'] = option;
                    romeon = zuuluu == foxtra;
                    yankee = undefined;
                    if(romeon) { _fun00012_ip = 88; continue _fun00011 }
 83:
                    yankee = foxtra.id;
 88:
                    report['channelId'] = yankee;
                    yankee = zuuluu == foxtra;
                    romeon = undefined;
                    if(yankee) { _fun00012_ip = 111; continue _fun00011 }
 101:
                    yankee = foxtra.getGuildId;
                    romeon = yankee.bind(foxtra)();
 111:
                    foxtra = zuuluu != romeon;
                    yankee = undefined;
                    if(!foxtra) { _fun00012_ip = 123; continue _fun00011 }
 120:
                    yankee = romeon;
 123:
                    report['guildId'] = yankee;
                    report['isContextless'] = verify;
                    report = golfie.bind(offset)(report);
                    SaveGenerator(address=141);
 139:
                    return report;
 141:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    tangon = report;
                    if(!golfie) { _fun00012_ip = 153; continue _fun00011 }
 150:
                    return report;
 153:
                    _closure4_slot0 = tangon;
                    zuuluu = zuuluu != tangon;
                    if(!zuuluu) { _fun00012_ip = 303; continue _fun00011 }
 167:
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
                    if(!golfie) { _fun00012_ip = 232; continue _fun00011 }
 223:
                    tangon = tangon.isVerified;
                    golfie = !tangon;
 232:
                    tangon = !golfie;
                    if(!golfie) { _fun00012_ip = 300; continue _fun00011 }
 238:
                    golfie = _closure1_slot5;
                    report = golfie.hasActivityEverBeenLaunched;
                    report = report.bind(golfie)(option);
                    golfie = !report;
                    report = !golfie;
                    if(!golfie) { _fun00012_ip = 297; continue _fun00011 }
 264:
                    golfie = global;
                    option = golfie.Promise;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    kiloes = function(argFoo) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 13;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.confirmExternalAppLaunchAlert;
                        michal = {};
                        oscard = _closure4_slot0;
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
                    };
                    sizing = golfie;
                    oscard = new sizing[option](kiloes, backup);
                    report = oscard instanceof Object ? oscard : golfie;
 297:
                    tangon = report;
 300:
                    zuuluu = tangon;
 303:
                    return zuuluu;
 306:
                    return michal;
 309:
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
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 121; continue _fun00013 }
 12:
                    zuuluu = {};
                    michal = oscard.currentEmbeddedApplication;
                    zuuluu['currentEmbeddedApplication'] = michal;
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
                    SaveGenerator(address=41);
 39:
                    return michal;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 118; continue _fun00013 }
 47:
                    if(michal) { _fun00014_ip = 55; continue _fun00013 }
 50:
                    zuuluu = false;
                    return zuuluu;
 55:
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
                    SaveGenerator(address=69);
 67:
                    return zuuluu;
 69:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00014_ip = 115; continue _fun00013 }
 75:
                    if(zuuluu) { _fun00014_ip = 83; continue _fun00013 }
 78:
                    golfie = false;
                    return golfie;
 83:
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
                    SaveGenerator(address=97);
 95:
                    return tangon;
 97:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 112; continue _fun00013 }
 103:
                    report = !tangon;
                    report = !report;
                    return report;
 112:
                    return tangon;
 115:
                    return zuuluu;
 118:
                    return michal;
 121:
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