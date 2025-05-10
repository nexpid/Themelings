// app/modules/applications/ApplicationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = verify;
    report = function() { // Original name: fetchApplication
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = report;
    entity = function() { // Original name: _fetchApplication
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 296; continue _fun00001 }
 13:
                    golfie = argFoo;
                    oscard = undefined;
                    if(!(michal === oscard)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    michal = false;
 24:
                    romeon = michal;
                    offset = arguments[2];
                    SaveGenerator(address=34);
 32:
                    return oscard;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 293; continue _fun00001 }
 43:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    option = 5;
                    zuuluu = zuuluu[option];
                    verify = report.bind(oscard)(zuuluu);
                    report = verify.dispatch;
                    zuuluu = {};
                    yankee = 'APPLICATION_FETCH';
                    zuuluu['type'] = yankee;
                    yankee = golfie;
                    zuuluu['applicationId'] = yankee;
                    zuuluu = report.bind(verify)(zuuluu);
 93: // try_start_0
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = verify[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    verify = zuuluu.HTTP;
                    report = verify.get;
                    zuuluu = {};
                    backup = _closure1_slot8;
                    foxtra = backup.APPLICATION_PUBLIC;
                    yankee = golfie;
                    yankee = foxtra.bind(backup)(yankee);
                    zuuluu['url'] = yankee;
                    yankee = {};
                    yankee['with_guild'] = romeon;
                    zuuluu['query'] = yankee;
                    yankee = true;
                    zuuluu['oldFormErrors'] = yankee;
                    zuuluu['signal'] = offset;
                    offset = false;
                    zuuluu['rejectWithError'] = offset;
                    zuuluu = report.bind(verify)(zuuluu);
                    SaveGenerator(address=185);
 183:
                    return zuuluu;
 185:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 245; continue _fun00001 }
 191:
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[option];
                    offset = verify.bind(oscard)(report);
                    verify = offset.dispatch;
                    report = {};
                    yankee = 'APPLICATION_FETCH_SUCCESS';
                    report['type'] = yankee;
                    yankee = zuuluu.body;
                    report['application'] = yankee;
                    report = verify.bind(offset)(report);
                    report = zuuluu.body;
 242: // try_end0
                    return report;
 245:
                    return zuuluu;
 248: // catch_target0
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'APPLICATION_FETCH_FAIL';
                    tangon['type'] = option;
                    tangon['applicationId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 293:
                    return michal;
 296:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = verify[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = verify[tangon];
    yankee = oscard.bind(entity)(tangon);
    var _closure1_slot6 = yankee;
    tangon = 4;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    oscard = tangon.ApplicationFlags;
    var _closure1_slot7 = oscard;
    oscard = tangon.Endpoints;
    var _closure1_slot8 = oscard;
    oscard = tangon.NOOP;
    var _closure1_slot9 = oscard;
    tangon = tangon.QueryIds;
    var _closure1_slot10 = tangon;
    oscard = {};
    tangon = function(argFoo) { // Original name: createApplication
        michal = argFoo;
        zuuluu = michal.name;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.guildId;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.type;
        var _closure2_slot2 = zuuluu;
        michal = michal.teamId;
        var _closure2_slot3 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 204; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.post;
                    michal = {};
                    golfie = _closure1_slot8;
                    golfie = golfie.APPLICATIONS;
                    michal['url'] = golfie;
                    option = {};
                    verify = _closure2_slot0;
                    option['name'] = verify;
                    verify = _closure2_slot2;
                    option['type'] = verify;
                    verify = _closure2_slot1;
                    option['guild_id'] = verify;
                    verify = _closure2_slot3;
                    option['team_id'] = verify;
                    michal['body'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=119);
 117:
                    return michal;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 201; continue _fun00003 }
 125:
                    zuuluu = michal.body;
                    report = _closure2_slot1;
                    option = null;
                    report = option != report;
                    if(!report) { _fun00004_ip = 151; continue _fun00003 }
 143:
                    golfie = _closure2_slot2;
                    report = option != golfie;
 151:
                    if(!report) { _fun00004_ip = 198; continue _fun00003 }
 154:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 5;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'APPLICATION_FETCH_SUCCESS';
                    tangon['type'] = golfie;
                    tangon['application'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
 198:
                    return zuuluu;
 201:
                    return michal;
 204:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    oscard['createApplication'] = tangon;
    tangon = function(argFoo) { // Original name: getApplicationsForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(report === michal)) { _fun00006_ip = 20; continue _fun00005 }
 18:
            report = {};
 20:
            zuuluu = report.includeTeam;
            var _closure2_slot1 = zuuluu;
            zuuluu = null;
            tangon = Object.create(zuuluu);
            zuuluu = 0;
            tangon['includeTeam'] = zuuluu;
            option = {};
            golfie = report;
            oscard = tangon;
            zuuluu = copyDataProperties(option, golfie, oscard);
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00008_ip = 182; continue _fun00007 }
 10:
                        zuuluu = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 6;
                        michal = report[michal];
                        oscard = undefined;
                        michal = zuuluu.bind(oscard)(michal);
                        report = michal.HTTP;
                        zuuluu = report.get;
                        michal = {};
                        offset = _closure1_slot8;
                        verify = offset.GUILD_APPLICATIONS;
                        golfie = _closure2_slot0;
                        golfie = verify.bind(offset)(golfie);
                        michal['url'] = golfie;
                        golfie = {};
                        yankee = _closure2_slot2;
                        romeon = golfie;
                        verify = copyDataProperties(romeon, yankee);
                        verify = _closure2_slot1;
                        option = 'include_team';
                        golfie[option] = verify;
                        michal['query'] = golfie;
                        golfie = false;
                        michal['rejectWithError'] = golfie;
                        michal = zuuluu.bind(report)(michal);
                        SaveGenerator(address=120);
 118:
                        return michal;
 120:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00008_ip = 179; continue _fun00007 }
 126:
                        zuuluu = michal.body;
                        report = _closure1_slot1;
                        golfie = _closure1_slot2;
                        tangon = 5;
                        tangon = golfie[tangon];
                        oscard = report.bind(oscard)(tangon);
                        report = oscard.dispatch;
                        tangon = {};
                        golfie = 'APPLICATIONS_FETCH_SUCCESS';
                        tangon['type'] = golfie;
                        tangon['applications'] = zuuluu;
                        tangon = report.bind(oscard)(tangon);
                        return zuuluu;
 179:
                        return michal;
 182:
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
    oscard['getApplicationsForGuild'] = tangon;
    tangon = function(argFoo) { // Original name: transferApplication
        michal = argFoo;
        zuuluu = michal.applicationId;
        var _closure2_slot0 = zuuluu;
        michal = michal.teamId;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 165; continue _fun00009 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.post;
                    michal = {};
                    offset = _closure1_slot8;
                    verify = offset.APPLICATION_OWNER_TRANSFER;
                    golfie = _closure2_slot0;
                    golfie = verify.bind(offset)(golfie);
                    michal['url'] = golfie;
                    golfie = {};
                    option = _closure2_slot1;
                    golfie['team_id'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=104);
 102:
                    return michal;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 162; continue _fun00009 }
 110:
                    zuuluu = michal.body;
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 5;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'APPLICATION_FETCH_SUCCESS';
                    tangon['type'] = golfie;
                    tangon['application'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 162:
                    return michal;
 165:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    oscard['transferApplication'] = tangon;
    tangon = function(argFoo) { // Original name: fetchApplications
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00012_ip = 20; continue _fun00011 }
 18:
            zuuluu = true;
 20:
            var _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00014_ip = 453; continue _fun00013 }
 12:
                        report = undefined;
                        offset = undefined;
                        var _closure4_slot0 = report;
                        oscard = _closure2_slot0;
                        tangon = _closure2_slot1;
                        if(tangon) { _fun00014_ip = 53; continue _fun00013 }
 34:
                        golfie = _closure2_slot0;
                        tangon = golfie.filter;
                        zuuluu = function(argFoo) {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                michal = argFoo;
                                zuuluu = _closure1_slot6;
                                entity = zuuluu.getApplication;
                                oscard = entity.bind(zuuluu)(michal);
                                zuuluu = _closure1_slot0;
                                report = _closure1_slot2;
                                entity = 7;
                                entity = report[entity];
                                option = undefined;
                                offset = zuuluu.bind(option)(entity);
                                verify = offset.hasFlag;
                                report = null;
                                zuuluu = report == oscard;
                                entity = undefined;
                                if(zuuluu) { _fun00016_ip = 65; continue _fun00015 }
 60:
                                entity = oscard.flags;
 65:
                                yankee = report != entity;
                                zuuluu = 0;
                                golfie = 0;
                                if(!yankee) { _fun00016_ip = 79; continue _fun00015 }
 76:
                                golfie = entity;
 79:
                                entity = _closure1_slot7;
                                entity = entity.EMBEDDED;
                                entity = verify.bind(offset)(golfie, entity);
                                if(!entity) { _fun00016_ip = 157; continue _fun00015 }
 98:
                                verify = report == oscard;
                                golfie = undefined;
                                if(verify) { _fun00016_ip = 128; continue _fun00015 }
 107:
                                verify = oscard.embeddedActivityConfig;
                                offset = report == verify;
                                golfie = undefined;
                                if(offset) { _fun00016_ip = 128; continue _fun00015 }
 122:
                                golfie = verify.supported_platforms;
 128:
                                golfie = report == golfie;
                                if(golfie) { _fun00016_ip = 154; continue _fun00015 }
 135:
                                verify = report == oscard;
                                option = undefined;
                                if(verify) { _fun00016_ip = 150; continue _fun00015 }
 144:
                                option = oscard.bot;
 150:
                                golfie = report == option;
 154:
                                entity = golfie;
 157:
                                report = report != oscard;
                                if(!report) { _fun00016_ip = 167; continue _fun00015 }
 164:
                                report = !entity;
 167:
                                entity = !report;
                                if(report) { _fun00016_ip = 191; continue _fun00015 }
 173:
                                oscard = _closure1_slot6;
                                report = oscard.isFetchingApplication;
                                report = report.bind(oscard)(michal);
                                entity = !report;
 191:
                                if(!entity) { _fun00016_ip = 214; continue _fun00015 }
 194:
                                report = _closure1_slot6;
                                tangon = report.didFetchingApplicationFail;
                                tangon = tangon.bind(report)(michal);
                                entity = !tangon;
 214:
                                if(!entity) { _fun00016_ip = 226; continue _fun00015 }
 217:
                                michal = michal.length;
                                entity = michal > zuuluu;
 226:
                                return entity;
                            }
                        };
                        oscard = tangon.bind(golfie)(zuuluu);
 53:
                        zuuluu = oscard;
                        tangon = zuuluu.length;
                        zuuluu = 0;
                        if(!(tangon > zuuluu)) { _fun00014_ip = 383; continue _fun00013 }
 70:
                        verify = _closure1_slot1;
                        tangon = _closure1_slot2;
                        golfie = 5;
                        tangon = tangon[golfie];
                        yankee = verify.bind(report)(tangon);
                        verify = yankee.dispatch;
                        tangon = {};
                        romeon = 'APPLICATIONS_FETCH';
                        tangon['type'] = romeon;
                        romeon = oscard;
                        tangon['applicationIds'] = romeon;
                        tangon = verify.bind(yankee)(tangon);
 121: // try_start_0
                        verify = _closure1_slot0;
                        yankee = _closure1_slot2;
                        tangon = 6;
                        tangon = yankee[tangon];
                        tangon = verify.bind(report)(tangon);
                        romeon = tangon.HTTP;
                        yankee = romeon.get;
                        tangon = {};
                        verify = _closure1_slot8;
                        verify = verify.APPLICATIONS_PUBLIC;
                        tangon['url'] = verify;
                        verify = global;
                        kiloes = verify.URLSearchParams;
                        sizing = oscard;
                        backup = sizing.map;
                        foxtra = function(argFoo) {
                            entity = ['application_ids'];
                            michal = argFoo;
                            entity[1] = michal;
                            return entity;
                        };
                        output = backup.bind(sizing)(foxtra);
                        backup = kiloes.prototype;
                        backup = Object.create(backup, {constructor: {value: kiloes}});
                        result = backup;
                        foxtra = new result[kiloes](output, sizing);
                        backup = foxtra instanceof Object ? foxtra : backup;
                        foxtra = backup.toString;
                        foxtra = foxtra.bind(backup)();
                        tangon['query'] = foxtra;
                        foxtra = true;
                        tangon['oldFormErrors'] = foxtra;
                        foxtra = false;
                        tangon['rejectWithError'] = foxtra;
                        tangon = yankee.bind(romeon)(tangon);
                        SaveGenerator(address=248);
 246:
                        return tangon;
 248:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                        if(yankee) { _fun00014_ip = 386; continue _fun00013 }
 257:
                        offset = tangon;
 260: // try_end0
                        romeon = offset;
                        foxtra = romeon.body;
                        yankee = verify.Set;
                        offset = foxtra.map;
                        verify = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        output = offset.bind(foxtra)(verify);
                        offset = yankee.prototype;
                        offset = Object.create(offset, {constructor: {value: yankee}});
                        result = offset;
                        verify = new result[yankee](output, sizing);
                        verify = verify instanceof Object ? verify : offset;
                        _closure4_slot0 = verify;
                        offset = oscard;
                        verify = offset.filter;
                        option = function(argFoo) {
                            zuuluu = _closure4_slot0;
                            michal = zuuluu.has;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            entity = !entity;
                            return entity;
                        };
                        yankee = verify.bind(offset)(option);
                        verify = _closure1_slot1;
                        option = _closure1_slot2;
                        option = option[golfie];
                        offset = verify.bind(report)(option);
                        verify = offset.dispatch;
                        option = {};
                        foxtra = 'APPLICATIONS_FETCH_SUCCESS';
                        option['type'] = foxtra;
                        romeon = romeon.body;
                        option['applications'] = romeon;
                        option['unknownApplicationIds'] = yankee;
                        option = verify.bind(offset)(option);
 383:
                        return report;
 386:
                        return tangon;
 389: // catch_target0
                        CatchBlockStart(arg_register=3);
                        michal = tangon;
                        option = tangon.status;
                        tangon = 429;
                        if(!(tangon !== option)) { _fun00014_ip = 451; continue _fun00013 }
 409:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[golfie];
                        report = tangon.bind(report)(zuuluu);
                        tangon = report.dispatch;
                        zuuluu = {};
                        golfie = 'APPLICATIONS_FETCH_FAIL';
                        zuuluu['type'] = golfie;
                        zuuluu['applicationIds'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 451:
                        throw michal;
 453:
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
    oscard['fetchApplications'] = tangon;
    oscard['fetchApplication'] = report;
    romeon = 8;
    tangon = verify[romeon];
    offset = option.bind(entity)(tangon);
    golfie = offset.createFetchStore;
    tangon = {};
    foxtra = function(argFoo) { // Original name: queryId
        zuuluu = _closure1_slot10;
        michal = zuuluu.APPLICATIONS;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['queryId'] = foxtra;
    foxtra = function(argFoo) { // Original name: get
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity != tangon;
            if(!michal) { _fun00018_ip = 30; continue _fun00017 }
 12:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getApplication;
            entity = michal.bind(zuuluu)(tangon);
 30:
            return entity;
        }
    };
    tangon['get'] = foxtra;
    foxtra = function(argFoo, argBar) { // Original name: load
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            golfie = argBar;
            entity = null;
            if(!(entity == golfie)) { _fun00020_ip = 29; continue _fun00019 }
 9:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            _fun00020_ip = 64; continue _fun00019;
 29:
            oscard = _closure1_slot12;
            report = undefined;
            tangon = false;
            zuuluu = argFoo;
            tangon = oscard.bind(report)(golfie, tangon, zuuluu);
            zuuluu = tangon.then;
            michal = _closure1_slot9;
            entity = zuuluu.bind(tangon)(michal);
 64:
            return entity;
        }
    };
    tangon['load'] = foxtra;
    romeon = verify[romeon];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.useStateFromStores;
    tangon['useStateHook'] = romeon;
    tangon = golfie.bind(offset)(yankee, tangon);
    var _closure1_slot11 = tangon;
    golfie = 9;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/applications/ApplicationActionCreators.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['fetchApplication'] = report;
    zuuluu['useApplication'] = tangon;
    michal = function(argFoo) { // Original name: useApplicationWithLoggedOutContext
        offset = argFoo;
        var _closure2_slot0 = offset;
        entity = _closure1_slot11;
        option = undefined;
        entity = entity.bind(option)(offset);
        verify = entity.data;
        var _closure2_slot1 = verify;
        zuuluu = entity.isLoading;
        michal = entity.error;
        entity = {};
        golfie = _closure1_slot0;
        yankee = _closure1_slot2;
        oscard = 8;
        oscard = yankee[oscard];
        option = golfie.bind(option)(oscard);
        golfie = option.useStateFromStores;
        report = _closure1_slot4;
        oscard = new Array(1);
        oscard[0] = report;
        report = new Array(2);
        report[0] = offset;
        report[1] = verify;
        tangon = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = _closure2_slot1;
                tangon = null;
                if(!(tangon == entity)) { _fun00022_ip = 39; continue _fun00021 }
 13:
                oscard = _closure1_slot4;
                report = oscard.getApplication;
                zuuluu = _closure2_slot0;
                zuuluu = report.bind(oscard)(zuuluu);
                if(!(tangon == zuuluu)) { _fun00022_ip = 45; continue _fun00021 }
 39:
                michal = _closure2_slot1;
                return michal;
 45:
                michal = _closure1_slot5;
                entity = michal.createFromServer;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        tangon = golfie.bind(option)(oscard, tangon, report);
        entity['app'] = tangon;
        entity['isLoading'] = zuuluu;
        entity['error'] = michal;
        return entity;
    };
    zuuluu['useApplicationWithLoggedOutContext'] = michal;
    return entity;
})();