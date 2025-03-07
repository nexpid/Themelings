// app/modules/blocked_domains/BlockedDomainListActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: fetchBlockedDomainList_
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchBlockedDomainList_
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 1186; continue _fun00001 }
 12:
                    michal = undefined;
                    romeon = undefined;
                    var _closure4_slot0 = michal;
                    golfie = undefined;
                    var _closure4_slot1 = michal;
                    report = undefined;
                    foxtra = undefined;
                    backup = undefined;
                    var _closure4_slot2 = michal;
                    verify = _closure1_slot9;
                    oscard = verify.verbose;
                    tangon = 'Fetching blocked domain list';
                    tangon = oscard.bind(verify)(tangon);
 60: // try_start_4
                    verify = global;
                    offset = verify.parseInt;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    yankee = 4;
                    tangon = tangon[yankee];
                    tangon = oscard.bind(michal)(tangon);
                    kiloes = tangon.HTTP;
                    oscard = kiloes.get;
                    tangon = _closure1_slot6;
                    tangon = oscard.bind(kiloes)(tangon);
                    SaveGenerator(address=111);
 109:
                    return tangon;
 111:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 1164; continue _fun00001 }
 120:
                    oscard = tangon.text;
                    echoed = offset.bind(michal)(oscard);
                    golfie = echoed;
                    _closure4_slot1 = echoed;
                    offset = _closure1_slot4;
                    oscard = offset.getCurrentRevision;
                    offset = oscard.bind(offset)();
                    report = offset;
                    sizing = _closure1_slot9;
                    kiloes = sizing.verbose;
                    oscard = verify.HermesInternal;
                    result = oscard.concat;
                    output = 'Server revision: ';
                    oscard = ', Client revision: ';
                    oscard = result.bind(output)(echoed, oscard, offset);
                    oscard = kiloes.bind(sizing)(oscard);
                    oscard = null;
                    if(!(oscard !== offset)) { _fun00002_ip = 220; continue _fun00001 }
 207:
                    kiloes = report;
                    offset = golfie;
                    if(!(kiloes !== offset)) { _fun00002_ip = 1143; continue _fun00001 }
 220: // try_start_0
                    offset = report;
                    if(!(oscard !== offset)) { _fun00002_ip = 821; continue _fun00001 }
 230:
                    kiloes = report;
                    offset = golfie;
                    if(!(!(kiloes > offset))) { _fun00002_ip = 821; continue _fun00001 }
 243:
                    offset = golfie;
                    golfie = report;
                    offset = offset - golfie;
                    golfie = _closure1_slot8;
                    if(!(!(offset > golfie))) { _fun00002_ip = 760; continue _fun00001 }
 264:
                    offset = _closure1_slot0;
                    golfie = _closure1_slot2;
                    golfie = golfie[yankee];
                    golfie = offset.bind(michal)(golfie);
                    kiloes = golfie.HTTP;
                    offset = kiloes.get;
                    golfie = {};
                    sizing = _closure1_slot7;
                    golfie['url'] = sizing;
                    sizing = {};
                    output = report;
                    sizing['revision'] = output;
                    golfie['query'] = sizing;
                    sizing = false;
                    golfie['rejectWithError'] = sizing;
                    golfie = offset.bind(kiloes)(golfie);
                    SaveGenerator(address=330);
 328:
                    return golfie;
 330:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 757; continue _fun00001 }
 339:
                    offset = golfie.body;
                    foxtra = offset;
                    offset = offset.ADDED;
                    offset = offset.length;
                    kiloes = 0;
                    if(!(kiloes === offset)) { _fun00002_ip = 385; continue _fun00001 }
 364:
                    offset = foxtra;
                    offset = offset.REMOVED;
                    offset = offset.length;
                    if(!(kiloes !== offset)) { _fun00002_ip = 731; continue _fun00001 }
 385:
                    sizing = _closure1_slot9;
                    kiloes = sizing.verbose;
                    offset = foxtra;
                    output = offset.ADDED;
                    update = output.length;
                    offset = offset.REMOVED;
                    echoed = offset.length;
                    offset = verify.HermesInternal;
                    result = offset.concat;
                    output = 'Retrieved delta, domains added: ';
                    offset = ', domains removed: ';
                    offset = result.bind(output)(update, offset, echoed);
                    offset = kiloes.bind(sizing)(offset);
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot2;
                    offset = 3;
                    offset = sizing[offset];
                    result = kiloes.bind(michal)(offset);
                    output = result.timeAsync;
                    sizing = '💾';
                    kiloes = 'getBlockedDomainList';
                    offset = function() {
                        michal = _closure1_slot4;
                        entity = michal.getBlockedDomainList;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    offset = output.bind(result)(sizing, kiloes, offset);
                    SaveGenerator(address=507);
 505:
                    return offset;
 507:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=14);
                    if(kiloes) { _fun00002_ip = 728; continue _fun00001 }
 516:
                    backup = offset;
                    _closure4_slot2 = offset;
                    if(!(oscard !== offset)) { _fun00002_ip = 694; continue _fun00001 }
 530:
                    output = _closure1_slot9;
                    sizing = output.verbose;
                    kiloes = backup;
                    update = kiloes.size;
                    backup = verify.HermesInternal;
                    echoed = backup.concat;
                    result = 'Blocked domains list length: ';
                    backup = ' before update';
                    backup = echoed.bind(result)(update, backup);
                    backup = sizing.bind(output)(backup);
                    output = foxtra.ADDED;
                    sizing = output.forEach;
                    backup = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            tangon = argFoo;
                            michal = _closure4_slot2;
                            zuuluu = michal[tangon];
                            michal = null;
                            if(!(michal == zuuluu)) { _fun00004_ip = 34; continue _fun00003 }
 20:
                            michal = _closure4_slot2;
                            entity = true;
                            michal[tangon] = entity;
                            entity = undefined;
                            return entity;
 34:
                            entity = global;
                            zuuluu = entity.Error;
                            entity = entity.HermesInternal;
                            michal = entity.concat;
                            entity = 'Unable to add domain which is already in the blockedDomains set: ';
                            report = michal.bind(entity)(tangon);
                            michal = zuuluu.prototype;
                            michal = Object.create(michal, {constructor: {value: zuuluu}});
                            oscard = michal;
                            entity = new oscard[zuuluu](report, tangon);
                            entity = entity instanceof Object ? entity : michal;
                            throw entity;
                        }
                    };
                    backup = sizing.bind(output)(backup);
                    sizing = foxtra.REMOVED;
                    backup = sizing.forEach;
                    foxtra = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            tangon = argFoo;
                            michal = _closure4_slot2;
                            zuuluu = michal[tangon];
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00006_ip = 34; continue _fun00005 }
 20:
                            michal = _closure4_slot2;
                            entity = false;
                            michal[tangon] = entity;
                            entity = undefined;
                            return entity;
 34:
                            entity = global;
                            zuuluu = entity.Error;
                            entity = entity.HermesInternal;
                            michal = entity.concat;
                            entity = 'Unable to removed domain which is not in the blockedDomains set: ';
                            report = michal.bind(entity)(tangon);
                            michal = zuuluu.prototype;
                            michal = Object.create(michal, {constructor: {value: zuuluu}});
                            oscard = michal;
                            entity = new oscard[zuuluu](report, tangon);
                            entity = entity instanceof Object ? entity : michal;
                            throw entity;
                        }
                    };
                    foxtra = backup.bind(sizing)(foxtra);
                    backup = verify.Object;
                    foxtra = backup.keys;
                    kiloes = foxtra.bind(backup)(kiloes);
                    backup = kiloes.filter;
                    foxtra = function(argFoo) {
                        michal = _closure4_slot2;
                        entity = argFoo;
                        entity = michal[entity];
                        return entity;
                    };
                    foxtra = backup.bind(kiloes)(foxtra);
                    romeon = foxtra;
                    _closure4_slot0 = foxtra;
                    kiloes = _closure1_slot9;
                    backup = kiloes.verbose;
                    foxtra = 'Delta applied successfully';
                    foxtra = backup.bind(kiloes)(foxtra);
 689: // try_end0
                    _fun00002_ip = 1044; continue _fun00001;
 694: // try_start_1
                    kiloes = verify.Error;
                    foxtra = kiloes.prototype;
                    backup = Object.create(foxtra, {constructor: {value: kiloes}});
                    vacuum = 'Blocked domain list is null';
                    sequen = backup;
                    foxtra = new sequen[kiloes](vacuum, ctrled);
                    foxtra = foxtra instanceof Object ? foxtra : backup;
                    throw foxtra;
 728: // try_end1 // try_end4
                    return offset;
 731: // try_start_2 // try_start_5
                    backup = _closure1_slot9;
                    foxtra = backup.verbose;
                    offset = 'No changes to blocked domains list.';
                    offset = foxtra.bind(backup)(offset);
 752: // try_end2 // try_end5
                    offset = undefined;
                    return offset;
 757:
                    return golfie;
 760: // try_start_3 // try_start_6
                    foxtra = verify.Error;
                    kiloes = _closure1_slot8;
                    golfie = verify.HermesInternal;
                    backup = golfie.concat;
                    offset = 'Client revision number is more than ';
                    golfie = ' behind the server revision number';
                    vacuum = backup.bind(offset)(kiloes, golfie);
                    offset = foxtra.prototype;
                    offset = Object.create(offset, {constructor: {value: foxtra}});
                    sequen = offset;
                    golfie = new sequen[foxtra](vacuum, ctrled);
                    golfie = golfie instanceof Object ? golfie : offset;
                    throw golfie;
 821:
                    golfie = verify.Error;
                    offset = 'greater than server revision number';
                    if(!(oscard === report)) { _fun00002_ip = 841; continue _fun00001 }
 837:
                    offset = 'null';
 841:
                    report = golfie.prototype;
                    oscard = Object.create(report, {constructor: {value: golfie}});
                    report = 'Client revision number is ';
                    vacuum = report + offset;
                    sequen = oscard;
                    report = new sequen[golfie](vacuum, ctrled);
                    report = report instanceof Object ? report : oscard;
                    throw report;
 873: // try_end3 // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=4);
                    golfie = _closure1_slot9;
                    oscard = golfie.verbose;
                    foxtra = report.message;
                    report = verify.HermesInternal;
                    offset = report.concat;
                    report = 'Unable to process domain list delta: ';
                    report = offset.bind(report)(foxtra);
                    report = oscard.bind(golfie)(report);
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 5;
                    report = golfie[report];
                    oscard = oscard.bind(michal)(report);
                    report = oscard.isSlowNetwork;
                    report = report.bind(oscard)();
                    golfie = _closure1_slot9;
                    oscard = golfie.verbose;
                    if(report) { _fun00002_ip = 1148; continue _fun00001 }
 963:
                    report = 'Downloading the full bad domains file';
                    report = oscard.bind(golfie)(report);
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[yankee];
                    report = offset.bind(michal)(report);
                    yankee = report.HTTP;
                    offset = yankee.get;
                    report = {};
                    foxtra = _closure1_slot5;
                    report['url'] = foxtra;
                    foxtra = false;
                    report['rejectWithError'] = foxtra;
                    report = offset.bind(yankee)(report);
                    SaveGenerator(address=1026);
 1024:
                    return report;
 1026:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 1145; continue _fun00001 }
 1032:
                    offset = report.body;
                    romeon = offset;
                    _closure4_slot0 = offset;
 1044:
                    yankee = _closure1_slot9;
                    offset = yankee.verbose;
                    backup = romeon.length;
                    verify = verify.HermesInternal;
                    foxtra = verify.concat;
                    romeon = 'Blocked domains list length: ';
                    verify = ' after update';
                    verify = foxtra.bind(romeon)(backup, verify);
                    verify = offset.bind(yankee)(verify);
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    verify = 3;
                    verify = yankee[verify];
                    romeon = offset.bind(michal)(verify);
                    yankee = romeon.time;
                    offset = '💾';
                    verify = 'Save Blocked Domain List';
                    option = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.dispatch;
                        entity = {};
                        tangon = 'BLOCKED_DOMAIN_LIST_FETCHED';
                        entity['type'] = tangon;
                        report = _closure4_slot0;
                        entity['list'] = report;
                        tangon = _closure4_slot1;
                        entity['revision'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    option = yankee.bind(romeon)(offset, verify, option);
 1143: // try_end6
                    _fun00002_ip = 1183; continue _fun00001;
 1145:
                    return report;
 1148: // try_start_7
                    report = 'Slow network detected, not downloading full list';
                    report = oscard.bind(golfie)(report);
 1159: // try_end7
                    report = undefined;
                    return report;
 1164:
                    return tangon;
 1167: // catch_target4 // catch_target5 // catch_target6 // catch_target7
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot9;
                    zuuluu = tangon.error;
                    zuuluu = zuuluu.bind(tangon)(report);
 1183:
                    return michal;
 1186:
                    return entity;
                }
            };
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
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json';
    var _closure1_slot5 = option;
    option = 'https://cdn.discordapp.com/bad-domains/current_revision.txt';
    var _closure1_slot6 = option;
    option = tangon.window;
    option = option.GLOBAL_ENV;
    offset = option.WEBAPP_ENDPOINT;
    tangon = tangon.HermesInternal;
    verify = tangon.concat;
    option = 'https:';
    tangon = '/bad-hash-delta';
    tangon = verify.bind(option)(offset, tangon);
    var _closure1_slot7 = tangon;
    tangon = 15;
    var _closure1_slot8 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    foxtra = 'FetchBlockedDomain';
    backup = golfie;
    tangon = new backup[option](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/blocked_domains/BlockedDomainListActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: fetchBlockedDomainList
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        report = tangon.bind(michal)(zuuluu);
        tangon = report.timeAsync;
        zuuluu = _closure1_slot10;
        michal = '💾';
        entity = 'fetchBlockedDomainList';
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    zuuluu['fetchBlockedDomainList'] = michal;
    return entity;
})();