// app/intl/IntlLoaderStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function() { // Original name: _setAppLocale
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 297; continue _fun00001 }
 15:
                    var _closure4_slot0 = oscard;
                    zuuluu = undefined;
                    var _closure4_slot1 = zuuluu;
                    golfie = _closure1_slot3;
                    report = golfie.getState;
                    report = report.bind(golfie)();
                    _closure4_slot1 = report;
                    golfie = report.setLoadingStarted;
                    golfie = golfie.bind(report)(oscard);
                    option = new Array(0);
                    golfie = _closure1_slot0;
                    offset = _closure1_slot1;
                    verify = 2;
                    verify = offset[verify];
                    verify = golfie.bind(zuuluu)(verify);
                    yankee = verify.intl;
                    verify = yankee.setLocale;
                    verify = verify.bind(yankee)(oscard);
                    verify = option.push;
                    verify = verify.bind(option)();
                    verify = option.push;
                    yankee = _closure1_slot2;
                    tangon = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00004_ip = 109; continue _fun00003 }
 7:
                                report = _closure1_slot0;
                                tangon = _closure1_slot1;
                                michal = 3;
                                michal = tangon[michal];
                                tangon = undefined;
                                report = report.bind(tangon)(michal);
                                michal = report.preloadAllIntlMessageFiles;
                                michal = michal.bind(report)();
                                SaveGenerator(address=46);
 44:
                                return michal;
 46:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00004_ip = 106; continue _fun00003 }
 52:
                                report = _closure1_slot0;
                                oscard = _closure1_slot1;
                                zuuluu = 4;
                                zuuluu = oscard[zuuluu];
                                oscard = report.bind(tangon)(zuuluu);
                                report = oscard.loadAllMessagesInLocale;
                                zuuluu = _closure4_slot0;
                                zuuluu = report.bind(oscard)(zuuluu);
                                SaveGenerator(address=94);
 92:
                                return zuuluu;
 94:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(report) { _fun00004_ip = 103; continue _fun00003 }
 100:
                                return tangon;
 103:
                                return zuuluu;
 106:
                                return michal;
 109:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    tangon = yankee.bind(zuuluu)(tangon);
                    tangon = tangon.bind(zuuluu)();
                    tangon = verify.bind(option)(tangon);
                    verify = option.push;
                    tangon = function() { // Original name: loadDateFnsLocale
                        entity = undefined;
                        tangon = _closure1_slot5;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    tangon = tangon.bind(zuuluu)(oscard);
                    tangon = verify.bind(option)(tangon);
                    verify = option.push;
                    tangon = function() { // Original name: setMomentLocale
                        entity = undefined;
                        tangon = _closure1_slot6;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    tangon = tangon.bind(zuuluu)(oscard);
                    tangon = verify.bind(option)(tangon);
                    verify = option.push;
                    tangon = 8;
                    tangon = offset[tangon];
                    tangon = golfie.bind(zuuluu)(tangon);
                    tangon = tangon.default;
                    golfie = tangon.setTags;
                    tangon = {};
                    tangon['locale'] = oscard;
                    tangon = golfie.bind(zuuluu)(tangon);
                    tangon = global;
                    offset = tangon.Promise;
                    golfie = offset.resolve;
                    golfie = golfie.bind(offset)();
                    golfie = verify.bind(option)(golfie);
                    golfie = tangon.Promise;
                    tangon = golfie.all;
                    golfie = tangon.bind(golfie)(option);
                    tangon = golfie.catch;
                    michal = function(argFoo) {
                        tangon = _closure4_slot1;
                        zuuluu = tangon.setLoadingFailed;
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=274);
 272:
                    return michal;
 274:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 294; continue _fun00001 }
 280:
                    tangon = report.setLoadingSucceeded;
                    tangon = tangon.bind(report)(oscard);
                    return zuuluu;
 294:
                    return michal;
 297:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _loadDateFnsLocale
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 76; continue _fun00005 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 5;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    tangon = michal.dateFnsLocales;
                    michal = argFoo;
                    michal = tangon[michal];
                    tangon = null;
                    if(!(tangon != michal)) { _fun00006_ip = 70; continue _fun00005 }
 51:
                    michal = michal.bind(zuuluu)();
                    michal = michal.default;
                    SaveGenerator(address=64);
 62:
                    return michal;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 73; continue _fun00005 }
 70:
                    return zuuluu;
 73:
                    return michal;
 76:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _setMomentLocale
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 205; continue _fun00007 }
 13:
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = oscard.bind(zuuluu)(michal);
                    michal = michal.momentLocales;
                    michal = michal[report];
                    oscard = null;
                    if(!(oscard != michal)) { _fun00008_ip = 71; continue _fun00007 }
 54:
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=62);
 60:
                    return michal;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00008_ip = 202; continue _fun00007 }
 71:
                    oscard = new Array(0);
                    golfie = 'nb';
                    option = 'no';
                    if(!(option !== report)) { _fun00008_ip = 90; continue _fun00007 }
 87:
                    golfie = report;
 90:
                    report = golfie.split;
                    verify = '-';
                    option = report.bind(golfie)(verify);
                    report = option.length;
                    golfie = 0;
                    if(!(report > golfie)) { _fun00008_ip = 154; continue _fun00007 }
 115:
                    offset = oscard.push;
                    report = option.join;
                    report = report.bind(option)(verify);
                    report = offset.bind(oscard)(report);
                    report = option.pop;
                    report = report.bind(option)();
                    report = option.length;
                    if(report > golfie) { _fun00008_ip = 115; continue _fun00007 }
 154:
                    golfie = oscard.push;
                    report = 'en-US';
                    report = golfie.bind(oscard)(report);
                    report = _closure1_slot0;
                    golfie = _closure1_slot1;
                    tangon = 7;
                    tangon = golfie[tangon];
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.locale;
                    tangon = tangon.bind(report)(oscard);
                    return zuuluu;
 202:
                    return michal;
 205:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createWithEqualityFn;
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        zuuluu = false;
        entity['isLoading'] = zuuluu;
        zuuluu = undefined;
        entity['inProgressLocale'] = zuuluu;
        entity['error'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setLoadingStarted
            zuuluu = _closure2_slot0;
            michal = {};
            entity = true;
            michal['isLoading'] = entity;
            entity = argFoo;
            michal['inProgressLocale'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity['setLoadingStarted'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setLoadingSucceeded
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                tangon = zuuluu.inProgressLocale;
                zuuluu = argFoo;
                if(!(tangon === zuuluu)) { _fun00010_ip = 53; continue _fun00009 }
 26:
                zuuluu = _closure2_slot0;
                michal = {};
                tangon = false;
                michal['isLoading'] = tangon;
                michal['inProgressLocale'] = entity;
                michal['error'] = entity;
                michal = zuuluu.bind(entity)(michal);
 53:
                return entity;
            }
        };
        entity['setLoadingSucceeded'] = zuuluu;
        michal = function(argFoo, argBar) { // Original name: setLoadingFailed
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                tangon = zuuluu.inProgressLocale;
                zuuluu = argBar;
                if(!(tangon === zuuluu)) { _fun00012_ip = 56; continue _fun00011 }
 26:
                zuuluu = _closure2_slot0;
                michal = {};
                tangon = false;
                michal['isLoading'] = tangon;
                michal['inProgressLocale'] = entity;
                tangon = argFoo;
                michal['error'] = tangon;
                michal = zuuluu.bind(entity)(michal);
 56:
                return entity;
            }
        };
        entity['setLoadingFailed'] = michal;
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'intl/IntlLoaderStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useIntlLoaderStore'] = tangon;
    tangon = function(argFoo) { // Original name: subscribeToIntlLoadingSuccess
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = zuuluu.subscribe;
        entity = function(argFoo, argBar) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                entity = argBar;
                michal = entity.inProgressLocale;
                tangon = null;
                michal = tangon != michal;
                if(!michal) { _fun00014_ip = 31; continue _fun00013 }
 21:
                report = zuuluu.inProgressLocale;
                michal = tangon == report;
 31:
                if(!michal) { _fun00014_ip = 43; continue _fun00013 }
 34:
                zuuluu = zuuluu.error;
                michal = tangon == zuuluu;
 43:
                if(!michal) { _fun00014_ip = 66; continue _fun00013 }
 46:
                zuuluu = _closure2_slot0;
                michal = entity.inProgressLocale;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 66:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['subscribeToIntlLoadingSuccess'] = tangon;
    michal = function() { // Original name: setAppLocale
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['setAppLocale'] = michal;
    return entity;
})();