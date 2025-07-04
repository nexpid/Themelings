// app/modules/threads/ThreadActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: patchThread
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 9;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.patch;
        michal = {};
        golfie = _closure1_slot11;
        oscard = golfie.CHANNEL;
        report = report.id;
        report = oscard.bind(golfie)(report);
        michal['url'] = report;
        report = argBar;
        michal['body'] = report;
        report = false;
        michal['rejectWithError'] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                oscard = 10;
                zuuluu = zuuluu[oscard];
                tangon = undefined;
                golfie = report.bind(tangon)(zuuluu);
                report = golfie.dispatch;
                zuuluu = {};
                option = 'THREAD_UPDATE';
                zuuluu['type'] = option;
                verify = _closure1_slot4;
                option = entity.body;
                option = verify.bind(tangon)(option);
                zuuluu['channel'] = option;
                zuuluu = report.bind(golfie)(zuuluu);
                golfie = _closure2_slot0;
                zuuluu = golfie.isForumPost;
                zuuluu = zuuluu.bind(golfie)();
                if(!zuuluu) { _fun00002_ip = 102; continue _fun00001 }
 86:
                golfie = _closure2_slot0;
                option = golfie.parent_id;
                golfie = null;
                zuuluu = golfie != option;
 102:
                if(!zuuluu) { _fun00002_ip = 156; continue _fun00001 }
 105:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                michal = michal[oscard];
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'RESORT_THREADS';
                michal['type'] = oscard;
                report = _closure2_slot0;
                report = report.parent_id;
                michal['channelId'] = report;
                michal = zuuluu.bind(tangon)(michal);
 156:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: dispatchThreadMemberLocalUpdate
        golfie = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'THREAD_MEMBER_LOCAL_UPDATE';
        michal['type'] = oscard;
        oscard = golfie.id;
        michal['id'] = oscard;
        oscard = golfie.getGuildId;
        oscard = oscard.bind(golfie)();
        michal['guildId'] = oscard;
        oscard = _closure1_slot5;
        report = oscard.getId;
        report = report.bind(oscard)();
        michal['userId'] = report;
        report = argBar;
        michal['isJoining'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot17 = entity;
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
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.createChannelRecordFromServer;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    option = oscard[michal];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.PAGE_SIZE;
    var _closure1_slot9 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.Endpoints;
    var _closure1_slot11 = golfie;
    golfie = michal.AbortCodes;
    var _closure1_slot12 = golfie;
    golfie = michal.AnalyticEvents;
    var _closure1_slot13 = golfie;
    michal = michal.Permissions;
    var _closure1_slot14 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ChannelFlags;
    var _closure1_slot15 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: archiveThread
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = {};
            entity = true;
            tangon['archived'] = entity;
            michal = argBar;
            if(!michal) { _fun00004_ip = 21; continue _fun00003 }
 15:
            tangon['locked'] = entity;
 21:
            zuuluu = _closure1_slot16;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity, tangon);
            return entity;
        }
    };
    michal['archiveThread'] = golfie;
    golfie = function(argFoo) { // Original name: lockThread
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = this;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 98; continue _fun00005 }
 7:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.isArchivedThread;
                    zuuluu = michal.bind(zuuluu)();
                    if(!zuuluu) { _fun00006_ip = 59; continue _fun00005 }
 27:
                    golfie = _closure2_slot1;
                    oscard = golfie.unarchiveThread;
                    report = _closure2_slot0;
                    michal = false;
                    michal = oscard.bind(golfie)(report, michal);
                    SaveGenerator(address=53);
 51:
                    return michal;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 95; continue _fun00005 }
 59:
                    oscard = _closure1_slot16;
                    report = _closure2_slot0;
                    tangon = {};
                    golfie = true;
                    tangon['locked'] = golfie;
                    tangon['archived'] = zuuluu;
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(report, tangon);
                    return zuuluu;
 95:
                    return michal;
 98:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['lockThread'] = golfie;
    golfie = function(argFoo) { // Original name: unlockThread
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = this;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 98; continue _fun00007 }
 7:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.isArchivedThread;
                    zuuluu = michal.bind(zuuluu)();
                    if(!zuuluu) { _fun00008_ip = 59; continue _fun00007 }
 27:
                    golfie = _closure2_slot1;
                    oscard = golfie.unarchiveThread;
                    report = _closure2_slot0;
                    michal = true;
                    michal = oscard.bind(golfie)(report, michal);
                    SaveGenerator(address=53);
 51:
                    return michal;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 95; continue _fun00007 }
 59:
                    oscard = _closure1_slot16;
                    report = _closure2_slot0;
                    tangon = {};
                    golfie = false;
                    tangon['locked'] = golfie;
                    tangon['archived'] = zuuluu;
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(report, tangon);
                    return zuuluu;
 95:
                    return michal;
 98:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['unlockThread'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: unarchiveThread
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(golfie) { _fun00010_ip = 849; continue _fun00009 }
 10:
                    yankee = undefined;
                    report = undefined;
                    oscard = undefined;
                    tangon = undefined;
                    zuuluu = undefined;
                    golfie = {};
                    verify = false;
                    golfie['archived'] = verify;
                    report = golfie;
                    offset = _closure2_slot0;
                    option = offset.isForumPost;
                    oscard = option.bind(offset)();
                    option = _closure2_slot1;
                    if(!option) { _fun00010_ip = 65; continue _fun00009 }
 56:
                    option = report;
                    option['locked'] = verify;
 65: // try_start_0
                    option = _closure1_slot16;
                    golfie = _closure2_slot0;
                    report = option.bind(yankee)(golfie, report);
                    SaveGenerator(address=86);
 84:
                    return report;
 86:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00010_ip = 95; continue _fun00009 }
 92: // try_end0
                    return report;
 95:
                    return report;
 98: // catch_target0
                    CatchBlockStart(arg_register=4);
                    michal = report;
                    golfie = report.body;
                    tangon = golfie;
                    report = null;
                    golfie = report == golfie;
                    option = undefined;
                    if(golfie) { _fun00010_ip = 127; continue _fun00009 }
 122:
                    option = tangon.code;
 127:
                    tangon = _closure1_slot12;
                    tangon = tangon.TOO_MANY_THREADS;
                    if(!(option !== tangon)) { _fun00010_ip = 664; continue _fun00009 }
 147:
                    tangon = michal;
                    tangon = tangon.body;
                    zuuluu = tangon;
                    report = report == tangon;
                    tangon = undefined;
                    if(report) { _fun00010_ip = 172; continue _fun00009 }
 167:
                    tangon = zuuluu.code;
 172:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(tangon !== zuuluu)) { _fun00010_ip = 523; continue _fun00009 }
 189:
                    zuuluu = michal;
                    tangon = zuuluu.status;
                    zuuluu = 429;
                    if(!(zuuluu !== tangon)) { _fun00010_ip = 351; continue _fun00009 }
 210:
                    tangon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = foxtra[zuuluu];
                    report = tangon.bind(yankee)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    romeon = _closure1_slot0;
                    option = 12;
                    verify = foxtra[option];
                    verify = romeon.bind(yankee)(verify);
                    backup = verify.intl;
                    offset = backup.string;
                    verify = foxtra[option];
                    verify = romeon.bind(yankee)(verify);
                    verify = verify.t;
                    verify = verify.j2d6Ki;
                    verify = offset.bind(backup)(verify);
                    zuuluu['title'] = verify;
                    verify = foxtra[option];
                    verify = romeon.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = foxtra[option];
                    option = romeon.bind(yankee)(option);
                    option = option.t;
                    option = option.fEptJC;
                    option = verify.bind(offset)(option);
                    zuuluu['body'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00010_ip = 847; continue _fun00009;
 351:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(yankee)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    option = oscard;
                    backup = _closure1_slot0;
                    verify = _closure1_slot2;
                    foxtra = 12;
                    offset = verify[foxtra];
                    offset = backup.bind(yankee)(offset);
                    romeon = offset.intl;
                    offset = romeon.string;
                    verify = verify[foxtra];
                    verify = backup.bind(yankee)(verify);
                    verify = verify.t;
                    if(option) { _fun00010_ip = 442; continue _fun00009 }
 429:
                    option = verify.PeIE/v;
                    option = offset.bind(romeon)(option);
                    _fun00010_ip = 453; continue _fun00009;
 442:
                    verify = verify.kwyWNT;
                    option = offset.bind(romeon)(verify);
 453:
                    zuuluu['title'] = option;
                    romeon = _closure1_slot0;
                    option = _closure1_slot2;
                    verify = option[foxtra];
                    verify = romeon.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = option[foxtra];
                    option = romeon.bind(yankee)(option);
                    option = option.t;
                    option = option.Whhv4+;
                    option = verify.bind(offset)(option);
                    zuuluu['body'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00010_ip = 847; continue _fun00009;
 523:
                    tangon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = foxtra[zuuluu];
                    report = tangon.bind(yankee)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    romeon = _closure1_slot0;
                    option = 12;
                    verify = foxtra[option];
                    verify = romeon.bind(yankee)(verify);
                    backup = verify.intl;
                    offset = backup.string;
                    verify = foxtra[option];
                    verify = romeon.bind(yankee)(verify);
                    verify = verify.t;
                    verify = verify.PeIE/v;
                    verify = offset.bind(backup)(verify);
                    zuuluu['title'] = verify;
                    verify = foxtra[option];
                    verify = romeon.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = foxtra[option];
                    option = romeon.bind(yankee)(option);
                    option = option.t;
                    option = option.jDMxz8;
                    option = verify.bind(offset)(option);
                    zuuluu['body'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00010_ip = 847; continue _fun00009;
 664:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(yankee)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    option = oscard;
                    backup = _closure1_slot0;
                    verify = _closure1_slot2;
                    romeon = 12;
                    offset = verify[romeon];
                    offset = backup.bind(yankee)(offset);
                    foxtra = offset.intl;
                    offset = foxtra.string;
                    verify = verify[romeon];
                    verify = backup.bind(yankee)(verify);
                    verify = verify.t;
                    if(option) { _fun00010_ip = 755; continue _fun00009 }
 742:
                    option = verify.PeIE/v;
                    option = offset.bind(foxtra)(option);
                    _fun00010_ip = 766; continue _fun00009;
 755:
                    verify = verify.kwyWNT;
                    option = offset.bind(foxtra)(verify);
 766:
                    zuuluu['title'] = option;
                    offset = _closure1_slot0;
                    golfie = _closure1_slot2;
                    option = golfie[romeon];
                    option = offset.bind(yankee)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = golfie[romeon];
                    golfie = offset.bind(yankee)(golfie);
                    golfie = golfie.t;
                    if(oscard) { _fun00010_ip = 827; continue _fun00009 }
 814:
                    oscard = golfie.P0wT5e;
                    oscard = option.bind(verify)(oscard);
                    _fun00010_ip = 838; continue _fun00009;
 827:
                    golfie = golfie.KGaiEB;
                    oscard = option.bind(verify)(golfie);
 838:
                    zuuluu['body'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 847:
                    throw michal;
 849:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['unarchiveThread'] = golfie;
    golfie = function(argFoo) { // Original name: unarchiveThreadIfNecessary
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = this;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 154; continue _fun00011 }
 10:
                    oscard = _closure1_slot6;
                    report = oscard.getChannel;
                    tangon = _closure2_slot0;
                    report = report.bind(oscard)(tangon);
                    oscard = _closure1_slot7;
                    tangon = oscard.can;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.MANAGE_THREADS;
                    tangon = tangon.bind(oscard)(zuuluu, report);
                    golfie = null;
                    zuuluu = golfie != report;
                    if(!zuuluu) { _fun00012_ip = 79; continue _fun00011 }
 69:
                    oscard = report.isArchivedThread;
                    zuuluu = oscard.bind(report)();
 79:
                    if(!zuuluu) { _fun00012_ip = 115; continue _fun00011 }
 82:
                    if(tangon) { _fun00012_ip = 112; continue _fun00011 }
 85:
                    oscard = report.threadMetadata;
                    option = golfie == oscard;
                    golfie = undefined;
                    if(option) { _fun00012_ip = 106; continue _fun00011 }
 100:
                    golfie = oscard.locked;
 106:
                    oscard = true;
                    tangon = oscard !== golfie;
 112:
                    zuuluu = tangon;
 115:
                    if(!zuuluu) { _fun00012_ip = 146; continue _fun00011 }
 118:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.unarchiveThread;
                    michal = false;
                    michal = zuuluu.bind(tangon)(report, michal);
                    SaveGenerator(address=140);
 138:
                    return michal;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 151; continue _fun00011 }
 146:
                    zuuluu = undefined;
                    return zuuluu;
 151:
                    return michal;
 154:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['unarchiveThreadIfNecessary'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setInvitable
        tangon = _closure1_slot16;
        zuuluu = {};
        entity = argBar;
        zuuluu['invitable'] = entity;
        michal = undefined;
        entity = argFoo;
        entity = tangon.bind(michal)(entity, zuuluu);
        return entity;
    };
    michal['setInvitable'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: joinThread
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 584; continue _fun00013 }
 10:
                    michal = undefined;
                    tangon = undefined;
                    option = undefined;
                    oscard = _closure2_slot0;
                    report = oscard.isForumPost;
                    report = report.bind(oscard)();
                    if(!report) { _fun00014_ip = 55; continue _fun00013 }
 36:
                    golfie = _closure1_slot17;
                    oscard = _closure2_slot0;
                    report = true;
                    report = golfie.bind(michal)(oscard, report);
 55: // try_start_0
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 9;
                    report = golfie[report];
                    report = oscard.bind(michal)(report);
                    golfie = report.HTTP;
                    oscard = golfie.post;
                    report = {};
                    yankee = _closure1_slot11;
                    offset = yankee.THREAD_MEMBER;
                    verify = _closure2_slot0;
                    verify = verify.id;
                    verify = offset.bind(yankee)(verify);
                    report['url'] = verify;
                    verify = {};
                    offset = _closure2_slot1;
                    verify['location'] = offset;
                    report['query'] = verify;
                    verify = false;
                    report['rejectWithError'] = verify;
                    report = oscard.bind(golfie)(report);
                    SaveGenerator(address=148);
 146:
                    return report;
 148:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00014_ip = 157; continue _fun00013 }
 154: // try_end0
                    return report;
 157:
                    return report;
 160: // catch_target0
                    CatchBlockStart(arg_register=4);
                    oscard = report.body;
                    tangon = oscard;
                    report = null;
                    report = report == oscard;
                    oscard = undefined;
                    if(report) { _fun00014_ip = 186; continue _fun00013 }
 181:
                    oscard = tangon.code;
 186:
                    report = _closure1_slot12;
                    report = report.TOO_MANY_THREAD_MEMBERS;
                    if(!(oscard !== report)) { _fun00014_ip = 347; continue _fun00013 }
 206:
                    oscard = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    report = 11;
                    report = foxtra[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.show;
                    report = {};
                    romeon = _closure1_slot0;
                    verify = 12;
                    offset = foxtra[verify];
                    offset = romeon.bind(michal)(offset);
                    backup = offset.intl;
                    yankee = backup.string;
                    offset = foxtra[verify];
                    offset = romeon.bind(michal)(offset);
                    offset = offset.t;
                    offset = offset.j2d6Ki;
                    offset = yankee.bind(backup)(offset);
                    report['title'] = offset;
                    offset = foxtra[verify];
                    offset = romeon.bind(michal)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtra[verify];
                    verify = romeon.bind(michal)(verify);
                    verify = verify.t;
                    verify = verify.fEptJC;
                    verify = offset.bind(yankee)(verify);
                    report['body'] = verify;
                    report = oscard.bind(golfie)(report);
                    _fun00014_ip = 548; continue _fun00013;
 347:
                    oscard = _closure2_slot0;
                    report = oscard.isForumPost;
                    verify = report.bind(oscard)();
                    option = verify;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 11;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.show;
                    report = {};
                    backup = _closure1_slot0;
                    offset = _closure1_slot2;
                    foxtra = 12;
                    yankee = offset[foxtra];
                    yankee = backup.bind(michal)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.string;
                    offset = offset[foxtra];
                    offset = backup.bind(michal)(offset);
                    offset = offset.t;
                    if(verify) { _fun00014_ip = 454; continue _fun00013 }
 439:
                    verify = offset.gtdVcn;
                    verify = yankee.bind(romeon)(verify);
                    _fun00014_ip = 467; continue _fun00013;
 454:
                    offset = offset.EMYJFh;
                    verify = yankee.bind(romeon)(offset);
 467:
                    report['title'] = verify;
                    romeon = _closure1_slot0;
                    verify = _closure1_slot2;
                    offset = verify[foxtra];
                    offset = romeon.bind(michal)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = verify[foxtra];
                    verify = romeon.bind(michal)(verify);
                    verify = verify.t;
                    if(option) { _fun00014_ip = 528; continue _fun00013 }
 515:
                    option = verify.abMwgo;
                    option = offset.bind(yankee)(option);
                    _fun00014_ip = 539; continue _fun00013;
 528:
                    verify = verify.QYyad3;
                    option = offset.bind(yankee)(verify);
 539:
                    report['body'] = option;
                    report = oscard.bind(golfie)(report);
 548:
                    oscard = _closure2_slot0;
                    report = oscard.isForumPost;
                    report = report.bind(oscard)();
                    if(!report) { _fun00014_ip = 581; continue _fun00013 }
 565:
                    report = _closure1_slot17;
                    tangon = _closure2_slot0;
                    zuuluu = false;
                    zuuluu = report.bind(michal)(tangon, zuuluu);
 581:
                    return michal;
 584:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['joinThread'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: addMember
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 523; continue _fun00015 }
 10:
                    michal = undefined;
                    zuuluu = undefined;
                    oscard = undefined;
 16: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 9;
                    tangon = golfie[tangon];
                    tangon = report.bind(michal)(tangon);
                    golfie = tangon.HTTP;
                    report = golfie.post;
                    tangon = {};
                    romeon = _closure1_slot11;
                    yankee = romeon.THREAD_MEMBER;
                    option = _closure2_slot0;
                    offset = option.id;
                    option = _closure2_slot1;
                    option = yankee.bind(romeon)(offset, option);
                    tangon['url'] = option;
                    option = {};
                    verify = _closure2_slot2;
                    option['location'] = verify;
                    tangon['query'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    tangon = report.bind(golfie)(tangon);
                    SaveGenerator(address=117);
 115:
                    return tangon;
 117:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00016_ip = 126; continue _fun00015 }
 123: // try_end0
                    return tangon;
 126:
                    return tangon;
 129: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = tangon.body;
                    zuuluu = report;
                    tangon = null;
                    report = tangon == report;
                    tangon = undefined;
                    if(report) { _fun00016_ip = 155; continue _fun00015 }
 150:
                    tangon = zuuluu.code;
 155:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.TOO_MANY_THREAD_MEMBERS;
                    if(!(tangon !== zuuluu)) { _fun00016_ip = 316; continue _fun00015 }
 175:
                    tangon = _closure1_slot1;
                    romeon = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = romeon[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    yankee = _closure1_slot0;
                    option = 12;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    foxtra = verify.intl;
                    offset = foxtra.string;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    verify = verify.t;
                    verify = verify.j2d6Ki;
                    verify = offset.bind(foxtra)(verify);
                    zuuluu['title'] = verify;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(michal)(option);
                    option = option.t;
                    option = option.fEptJC;
                    option = verify.bind(offset)(option);
                    zuuluu['body'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00016_ip = 520; continue _fun00015;
 316:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.isForumPost;
                    option = zuuluu.bind(tangon)();
                    oscard = option;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    foxtra = _closure1_slot0;
                    verify = _closure1_slot2;
                    yankee = 12;
                    offset = verify[yankee];
                    offset = foxtra.bind(michal)(offset);
                    romeon = offset.intl;
                    offset = romeon.string;
                    verify = verify[yankee];
                    verify = foxtra.bind(michal)(verify);
                    verify = verify.t;
                    if(option) { _fun00016_ip = 426; continue _fun00015 }
 411:
                    option = verify.YErysL;
                    option = offset.bind(romeon)(option);
                    _fun00016_ip = 439; continue _fun00015;
 426:
                    verify = verify.0yAqqK;
                    option = offset.bind(romeon)(verify);
 439:
                    zuuluu['title'] = option;
                    offset = _closure1_slot0;
                    golfie = _closure1_slot2;
                    option = golfie[yankee];
                    option = offset.bind(michal)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = golfie[yankee];
                    golfie = offset.bind(michal)(golfie);
                    golfie = golfie.t;
                    if(oscard) { _fun00016_ip = 500; continue _fun00015 }
 487:
                    oscard = golfie.abMwgo;
                    oscard = option.bind(verify)(oscard);
                    _fun00016_ip = 511; continue _fun00015;
 500:
                    golfie = golfie.QYyad3;
                    oscard = option.bind(verify)(golfie);
 511:
                    zuuluu['body'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 520:
                    return michal;
 523:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['addMember'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: leaveThread
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            entity = tangon.isForumPost;
            entity = entity.bind(tangon)();
            if(!entity) { _fun00018_ip = 33; continue _fun00017 }
 16:
            zuuluu = _closure1_slot17;
            michal = undefined;
            entity = false;
            entity = zuuluu.bind(michal)(tangon, entity);
 33:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.HTTP;
            michal = zuuluu.del;
            entity = {};
            oscard = _closure1_slot11;
            report = oscard.THREAD_MEMBER;
            tangon = tangon.id;
            tangon = report.bind(oscard)(tangon);
            entity['url'] = tangon;
            tangon = {};
            report = argBar;
            tangon['location'] = report;
            entity['query'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['leaveThread'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: removeMember
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        golfie = _closure1_slot11;
        oscard = golfie.THREAD_MEMBER;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        tangon = {};
        report = argBaz;
        tangon['location'] = report;
        entity['query'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['removeMember'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setAutoArchiveDuration
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        oscard = _closure1_slot11;
        report = oscard.CHANNEL;
        tangon = argFoo;
        tangon = tangon.id;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = {};
        report = argBar;
        tangon['auto_archive_duration'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['setAutoArchiveDuration'] = golfie;
    golfie = function(argFoo) { // Original name: pin
        report = argFoo;
        tangon = this;
        michal = report.flags;
        entity = _closure1_slot15;
        entity = entity.PINNED;
        zuuluu = michal | entity;
        michal = tangon.updateFlags;
        entity = report.isArchivedThread;
        entity = entity.bind(report)();
        entity = michal.bind(tangon)(report, zuuluu, entity);
        entity = undefined;
        return entity;
    };
    michal['pin'] = golfie;
    golfie = function(argFoo) { // Original name: unpin
        tangon = argFoo;
        zuuluu = this;
        michal = tangon.flags;
        entity = _closure1_slot15;
        entity = entity.PINNED;
        entity = ~entity;
        michal = michal & entity;
        entity = zuuluu.updateFlags;
        entity = entity.bind(zuuluu)(tangon, michal);
        entity = undefined;
        return entity;
    };
    michal['unpin'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: updateFlags
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00020_ip = 27; continue _fun00019 }
 25:
            zuuluu = false;
 27:
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00022_ip = 253; continue _fun00021 }
 10:
                        michal = undefined;
                        offset = undefined;
                        oscard = _closure1_slot1;
                        tangon = _closure1_slot2;
                        report = 10;
                        tangon = tangon[report];
                        yankee = oscard.bind(michal)(tangon);
                        verify = yankee.dispatch;
                        tangon = {};
                        golfie = 'THREAD_UPDATE';
                        tangon['type'] = golfie;
                        backup = _closure2_slot0;
                        foxtra = backup.merge;
                        romeon = {};
                        option = _closure2_slot1;
                        romeon['flags'] = option;
                        romeon = foxtra.bind(backup)(romeon);
                        tangon['channel'] = romeon;
                        tangon = verify.bind(yankee)(tangon);
                        tangon = {};
                        tangon['flags'] = option;
                        offset = tangon;
                        tangon = _closure2_slot2;
                        if(!tangon) { _fun00022_ip = 116; continue _fun00021 }
 105:
                        option = offset;
                        tangon = false;
                        option['archived'] = tangon;
 116: // try_start_0
                        option = _closure1_slot0;
                        verify = _closure1_slot2;
                        tangon = 9;
                        tangon = verify[tangon];
                        tangon = option.bind(michal)(tangon);
                        verify = tangon.HTTP;
                        option = verify.patch;
                        tangon = {};
                        foxtra = _closure1_slot11;
                        romeon = foxtra.CHANNEL;
                        yankee = _closure2_slot0;
                        yankee = yankee.id;
                        yankee = romeon.bind(foxtra)(yankee);
                        tangon['url'] = yankee;
                        tangon['body'] = offset;
                        offset = true;
                        tangon['rejectWithError'] = offset;
                        tangon = option.bind(verify)(tangon);
                        SaveGenerator(address=196);
 194:
                        return tangon;
 196:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(option) { _fun00022_ip = 204; continue _fun00021 }
 202: // try_end0
                        _fun00022_ip = 250; continue _fun00021;
 204:
                        return tangon;
 207: // catch_target0
                        CatchBlockStart(arg_register=3);
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[report];
                        report = tangon.bind(michal)(zuuluu);
                        tangon = report.dispatch;
                        zuuluu = {};
                        zuuluu['type'] = golfie;
                        oscard = _closure2_slot0;
                        zuuluu['channel'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 250:
                        return michal;
 253:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['updateFlags'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: replacePin
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = this;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00024_ip = 604; continue _fun00023 }
 10:
                    michal = _closure2_slot0;
                    report = michal.merge;
                    zuuluu = {};
                    verify = michal.flags;
                    option = _closure1_slot15;
                    oscard = option.PINNED;
                    oscard = ~oscard;
                    oscard = verify & oscard;
                    zuuluu['flags'] = oscard;
                    backup = report.bind(michal)(zuuluu);
                    oscard = _closure2_slot1;
                    report = oscard.merge;
                    zuuluu = {};
                    verify = oscard.flags;
                    option = option.PINNED;
                    option = verify | option;
                    zuuluu['flags'] = option;
                    yankee = report.bind(oscard)(zuuluu);
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    verify = 10;
                    option = zuuluu[verify];
                    oscard = undefined;
                    foxtra = report.bind(oscard)(option);
                    romeon = foxtra.dispatch;
                    offset = {};
                    option = 'THREAD_UPDATE';
                    offset['type'] = option;
                    offset['channel'] = backup;
                    offset = romeon.bind(foxtra)(offset);
                    zuuluu = zuuluu[verify];
                    offset = report.bind(oscard)(zuuluu);
                    report = offset.dispatch;
                    zuuluu = {};
                    zuuluu['type'] = option;
                    zuuluu['channel'] = yankee;
                    zuuluu = report.bind(offset)(zuuluu);
                    report = _closure2_slot2;
                    zuuluu = report.unarchiveThreadIfNecessary;
                    michal = michal.id;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=194);
 192:
                    return michal;
 194:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00024_ip = 601; continue _fun00023 }
 203:
                    offset = _closure2_slot2;
                    report = offset.unarchiveThreadIfNecessary;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(offset)(zuuluu);
                    SaveGenerator(address=231);
 229:
                    return zuuluu;
 231:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00024_ip = 598; continue _fun00023 }
 240: // try_start_0
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    romeon = 9;
                    report = report[romeon];
                    report = offset.bind(oscard)(report);
                    yankee = report.HTTP;
                    offset = yankee.patch;
                    report = {};
                    sizing = _closure1_slot11;
                    kiloes = sizing.CHANNEL;
                    backup = _closure2_slot0;
                    foxtra = backup.id;
                    foxtra = kiloes.bind(sizing)(foxtra);
                    report['url'] = foxtra;
                    foxtra = {};
                    kiloes = backup.flags;
                    backup = _closure1_slot15;
                    backup = backup.PINNED;
                    backup = ~backup;
                    backup = kiloes & backup;
                    foxtra['flags'] = backup;
                    report['body'] = foxtra;
                    foxtra = true;
                    report['rejectWithError'] = foxtra;
                    report = offset.bind(yankee)(report);
                    SaveGenerator(address=348);
 346:
                    return report;
 348:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun00024_ip = 514; continue _fun00023 }
 357: // try_start_1 // try_end0
                    yankee = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[romeon];
                    offset = yankee.bind(oscard)(offset);
                    romeon = offset.HTTP;
                    yankee = romeon.patch;
                    offset = {};
                    output = _closure1_slot11;
                    sizing = output.CHANNEL;
                    kiloes = _closure2_slot1;
                    backup = kiloes.id;
                    backup = sizing.bind(output)(backup);
                    offset['url'] = backup;
                    backup = {};
                    sizing = kiloes.flags;
                    kiloes = _closure1_slot15;
                    kiloes = kiloes.PINNED;
                    kiloes = sizing | kiloes;
                    backup['flags'] = kiloes;
                    offset['body'] = backup;
                    offset['rejectWithError'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    SaveGenerator(address=457);
 455:
                    return offset;
 457:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00024_ip = 465; continue _fun00023 }
 463: // try_end1
                    _fun00024_ip = 511; continue _fun00023;
 465:
                    return offset;
 468: // catch_target1
                    CatchBlockStart(arg_register=9);
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[verify];
                    romeon = yankee.bind(oscard)(offset);
                    yankee = romeon.dispatch;
                    offset = {};
                    offset['type'] = option;
                    foxtra = _closure2_slot1;
                    offset['channel'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
 511:
                    return oscard;
 514:
                    return report;
 517: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    offset = tangon[verify];
                    romeon = report.bind(oscard)(offset);
                    yankee = romeon.dispatch;
                    offset = {};
                    offset['type'] = option;
                    foxtra = _closure2_slot0;
                    offset['channel'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    tangon = tangon[verify];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    tangon['type'] = option;
                    golfie = _closure2_slot1;
                    tangon['channel'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    tangon = undefined;
                    return tangon;
 598:
                    return zuuluu;
 601:
                    return michal;
 604:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['replacePin'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: openThreadCreationForMobile
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            verify = argBaz;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 13;
            zuuluu = golfie[entity];
            entity = undefined;
            offset = oscard.bind(entity)(zuuluu);
            option = offset.trackWithMetadata;
            zuuluu = _closure1_slot13;
            oscard = zuuluu.THREAD_CREATION_STARTED;
            zuuluu = {};
            zuuluu['location'] = verify;
            yankee = report.id;
            zuuluu['channel_id'] = yankee;
            yankee = report.guild_id;
            zuuluu['guild_id'] = yankee;
            zuuluu = option.bind(offset)(oscard, zuuluu);
            oscard = _closure1_slot1;
            zuuluu = 14;
            zuuluu = golfie[zuuluu];
            option = oscard.bind(entity)(zuuluu);
            golfie = option.changeThreadSettings;
            oscard = report.id;
            zuuluu = {};
            zuuluu['parentMessageId'] = tangon;
            offset = false;
            zuuluu['isPrivate'] = offset;
            zuuluu['location'] = verify;
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00026_ip = 193; continue _fun00025 }
 137:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 15;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.setActiveCommand;
            michal = {'channelId': null, 'command': null, 'section': null};
            report = report.id;
            michal['channelId'] = report;
            michal = zuuluu.bind(tangon)(michal);
 193:
            return entity;
        }
    };
    michal['openThreadCreationForMobile'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setNotificationSettings
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = this;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00028_ip = 203; continue _fun00027 }
 10:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 16;
                    michal = tangon[michal];
                    tangon = undefined;
                    option = zuuluu.bind(tangon)(michal);
                    golfie = option.trackThreadNotificationSettingsUpdated;
                    michal = _closure2_slot0;
                    zuuluu = _closure2_slot1;
                    zuuluu = golfie.bind(option)(michal, zuuluu);
                    golfie = _closure1_slot10;
                    zuuluu = golfie.hasJoined;
                    michal = michal.id;
                    michal = zuuluu.bind(golfie)(michal);
                    if(michal) { _fun00028_ip = 120; continue _fun00027 }
 81:
                    option = _closure2_slot2;
                    golfie = option.joinThread;
                    zuuluu = _closure2_slot0;
                    michal = 'Change Notification Settings';
                    michal = golfie.bind(option)(zuuluu, michal);
                    SaveGenerator(address=111);
 109:
                    return michal;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!zuuluu) { _fun00028_ip = 120; continue _fun00027 }
 117:
                    return michal;
 120:
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 9;
                    michal = golfie[michal];
                    michal = zuuluu.bind(tangon)(michal);
                    tangon = michal.HTTP;
                    zuuluu = tangon.patch;
                    michal = {};
                    option = _closure1_slot11;
                    golfie = option.THREAD_MEMBER_SETTINGS;
                    oscard = _closure2_slot0;
                    oscard = oscard.id;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    report = _closure2_slot1;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return michal;
 203:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['setNotificationSettings'] = golfie;
    golfie = function(argFoo) { // Original name: loadArchivedThreads
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guildId;
            var _closure2_slot0 = zuuluu;
            yankee = michal.channelId;
            var _closure2_slot1 = yankee;
            oscard = michal.sortOrder;
            var _closure2_slot2 = oscard;
            romeon = michal.tagFilter;
            var _closure2_slot3 = romeon;
            option = michal.tagSetting;
            var _closure2_slot4 = option;
            golfie = michal.offset;
            var _closure2_slot5 = golfie;
            zuuluu = _closure1_slot8;
            michal = zuuluu.isLoading;
            result = zuuluu;
            output = yankee;
            sizing = oscard;
            kiloes = romeon;
            backup = option;
            michal = result[michal](output, sizing, kiloes, backup, foxtra);
            if(michal) { _fun00030_ip = 338; continue _fun00029 }
 101:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 10;
            michal = tangon[michal];
            verify = undefined;
            report = zuuluu.bind(verify)(michal);
            zuuluu = report.dispatch;
            michal = {};
            foxtra = 'LOAD_ARCHIVED_THREADS';
            michal['type'] = foxtra;
            michal['channelId'] = yankee;
            michal['sortOrder'] = oscard;
            michal['tagFilter'] = romeon;
            michal['tagSetting'] = option;
            michal = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot0;
            michal = 9;
            michal = tangon[michal];
            michal = zuuluu.bind(verify)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {};
            oscard = _closure1_slot11;
            report = oscard.THREAD_SEARCH;
            report = report.bind(oscard)(yankee);
            michal['url'] = report;
            oscard = {'archived': true, 'sort_by': 'last_message_time', 'sort_order': 'desc'};
            report = true;
            offset = _closure1_slot9;
            oscard['limit'] = offset;
            yankee = romeon.size;
            offset = 0;
            offset = yankee > offset;
            if(!offset) { _fun00030_ip = 282; continue _fun00029 }
 250:
            offset = global;
            yankee = offset.Array;
            offset = yankee.from;
            romeon = offset.bind(yankee)(romeon);
            yankee = romeon.join;
            offset = ',';
            verify = yankee.bind(romeon)(offset);
 282:
            oscard['tag'] = verify;
            oscard['tag_setting'] = option;
            oscard['offset'] = golfie;
            michal['query'] = oscard;
            oscard = 2;
            michal['retries'] = oscard;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    option = entity.threads;
                    yankee = entity.members;
                    tangon = entity.has_more;
                    romeon = entity.first_messages;
                    offset = entity.most_recent_messages;
                    golfie = null;
                    if(!(golfie != option)) { _fun00032_ip = 255; continue _fun00031 }
 49:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 10;
                    entity = zuuluu[entity];
                    verify = undefined;
                    zuuluu = michal.bind(verify)(entity);
                    michal = zuuluu.dispatch;
                    entity = {};
                    foxtra = 'LOAD_ARCHIVED_THREADS_SUCCESS';
                    entity['type'] = foxtra;
                    backup = _closure2_slot0;
                    entity['guildId'] = backup;
                    backup = _closure2_slot1;
                    entity['channelId'] = backup;
                    backup = _closure2_slot5;
                    entity['offset'] = backup;
                    backup = _closure2_slot2;
                    entity['sortOrder'] = backup;
                    backup = _closure2_slot3;
                    entity['tagFilter'] = backup;
                    foxtra = _closure2_slot4;
                    entity['tagSetting'] = foxtra;
                    entity['threads'] = option;
                    entity['firstMessages'] = romeon;
                    entity['mostRecentMessages'] = offset;
                    if(!(golfie == yankee)) { _fun00032_ip = 167; continue _fun00031 }
 163:
                    yankee = new Array(0);
 167:
                    offset = yankee.map;
                    golfie = function(argFoo) {
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 17;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)(entity);
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    golfie = offset.bind(yankee)(golfie);
                    entity['members'] = golfie;
                    golfie = option.map;
                    oscard = function(argFoo) {
                        entity = argFoo;
                        entity = entity.owner;
                        return entity;
                    };
                    golfie = golfie.bind(option)(oscard);
                    oscard = golfie.filter;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 18;
                    report = offset[report];
                    report = option.bind(verify)(report);
                    report = report.isNotNullish;
                    report = oscard.bind(golfie)(report);
                    entity['owners'] = report;
                    entity['hasMore'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00032_ip = 340; continue _fun00031;
 255:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    tangon = 'LOAD_ARCHIVED_THREADS_FAIL';
                    entity['type'] = tangon;
                    report = _closure2_slot1;
                    entity['channelId'] = report;
                    report = _closure2_slot2;
                    entity['sortOrder'] = report;
                    report = _closure2_slot3;
                    entity['tagFilter'] = report;
                    tangon = _closure2_slot4;
                    entity['tagSetting'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 340:
                    entity = undefined;
                    return entity;
                }
            };
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'LOAD_ARCHIVED_THREADS_FAIL';
                michal['type'] = report;
                oscard = _closure2_slot1;
                michal['channelId'] = oscard;
                oscard = _closure2_slot2;
                michal['sortOrder'] = oscard;
                oscard = _closure2_slot3;
                michal['tagFilter'] = oscard;
                report = _closure2_slot4;
                michal['tagSetting'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
 338:
            entity = undefined;
            return entity;
        }
    };
    michal['loadArchivedThreads'] = golfie;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: searchThreads
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            zuuluu = arguments[4];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = argBaz;
            var _closure2_slot2 = michal;
            michal = argCor;
            var _closure2_slot3 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00034_ip = 74; continue _fun00033 }
 39:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 19;
            tangon = oscard[tangon];
            tangon = report.bind(michal)(tangon);
            tangon = tangon.ThreadSearchTagSetting;
            zuuluu = tangon.MATCH_SOME;
 74:
            var _closure2_slot4 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00036_ip = 312; continue _fun00035 }
 10:
                        zuuluu = _closure2_slot3;
                        michal = null;
                        michal = michal != zuuluu;
                        oscard = undefined;
                        option = undefined;
                        if(!michal) { _fun00036_ip = 86; continue _fun00035 }
 30:
                        michal = _closure2_slot3;
                        zuuluu = michal.size;
                        michal = 0;
                        michal = zuuluu > michal;
                        option = undefined;
                        if(!michal) { _fun00036_ip = 86; continue _fun00035 }
 50:
                        michal = global;
                        tangon = michal.Array;
                        zuuluu = tangon.from;
                        michal = _closure2_slot3;
                        tangon = zuuluu.bind(tangon)(michal);
                        zuuluu = tangon.join;
                        michal = ',';
                        option = zuuluu.bind(tangon)(michal);
 86:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 9;
                        michal = report[michal];
                        michal = tangon.bind(oscard)(michal);
                        report = michal.HTTP;
                        tangon = report.get;
                        michal = {};
                        yankee = _closure1_slot11;
                        offset = yankee.THREAD_SEARCH;
                        golfie = _closure2_slot1;
                        golfie = offset.bind(yankee)(golfie);
                        michal['url'] = golfie;
                        golfie = {};
                        offset = _closure2_slot2;
                        golfie['name'] = offset;
                        golfie['tag'] = option;
                        option = _closure2_slot4;
                        golfie['tag_setting'] = option;
                        michal['query'] = golfie;
                        golfie = false;
                        michal['rejectWithError'] = golfie;
                        michal = tangon.bind(report)(michal);
                        SaveGenerator(address=186);
 184:
                        return michal;
 186:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00036_ip = 309; continue _fun00035 }
 192:
                        tangon = michal.body;
                        report = tangon.threads;
                        offset = tangon.members;
                        option = tangon.first_messages;
                        golfie = tangon.most_recent_messages;
                        tangon = _closure1_slot1;
                        yankee = _closure1_slot2;
                        zuuluu = 10;
                        zuuluu = yankee[zuuluu];
                        oscard = tangon.bind(oscard)(zuuluu);
                        tangon = oscard.dispatch;
                        zuuluu = {};
                        yankee = 'LOAD_THREADS_SUCCESS';
                        zuuluu['type'] = yankee;
                        zuuluu['threads'] = report;
                        zuuluu['members'] = offset;
                        verify = _closure2_slot0;
                        zuuluu['guildId'] = verify;
                        zuuluu['firstMessages'] = option;
                        zuuluu['mostRecentMessages'] = golfie;
                        zuuluu = tangon.bind(oscard)(zuuluu);
                        tangon = report.map;
                        zuuluu = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        zuuluu = tangon.bind(report)(zuuluu);
                        return zuuluu;
 309:
                        return michal;
 312:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['searchThreads'] = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/ThreadActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();