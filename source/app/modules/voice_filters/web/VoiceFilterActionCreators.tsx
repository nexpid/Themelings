// app/modules/voice_filters/web/VoiceFilterActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _applyVoiceFilterInNativeModule
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
                    if(zuuluu) { _fun00002_ip = 312; continue _fun00001 }
 13:
                    verify = argFoo;
                    tangon = undefined;
                    if(!(michal === tangon)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    michal = null;
 24:
                    foxtra = michal;
                    yankee = undefined;
                    SaveGenerator(address=33);
 31:
                    return tangon;
 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 309; continue _fun00001 }
 42:
                    zuuluu = _closure1_slot17;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=57);
 55:
                    return zuuluu;
 57:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 306; continue _fun00001 }
 66:
                    romeon = global;
                    golfie = romeon.performance;
                    oscard = golfie.now;
                    yankee = oscard.bind(golfie)();
 83: // try_start_0
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 9;
                    oscard = option[oscard];
                    golfie = golfie.bind(tangon)(oscard);
                    oscard = golfie.getVoiceFilters;
                    option = oscard.bind(golfie)();
                    golfie = option.setVoiceFilter;
                    oscard = {};
                    offset = verify;
                    oscard['name'] = offset;
                    oscard = golfie.bind(option)(oscard);
                    SaveGenerator(address=139);
 137:
                    return oscard;
 139:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 228; continue _fun00001 }
 145:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 7;
                    golfie = offset[golfie];
                    offset = option.bind(tangon)(golfie);
                    option = offset.dispatch;
                    golfie = {};
                    backup = 'VOICE_FILTER_APPLIED';
                    golfie['type'] = backup;
                    backup = verify;
                    golfie['voiceFilterId'] = backup;
                    golfie['analyticsContext'] = foxtra;
                    foxtra = romeon.performance;
                    romeon = foxtra.now;
                    romeon = romeon.bind(foxtra)();
                    yankee = romeon - yankee;
                    golfie['activationDurationMs'] = yankee;
                    golfie = option.bind(offset)(golfie);
 226: // try_end0
                    _fun00002_ip = 303; continue _fun00001;
 228:
                    return oscard;
 231: // catch_target0
                    CatchBlockStart(arg_register=7);
                    offset = _closure1_slot9;
                    golfie = offset.error;
                    oscard = 'failed to set voice filter';
                    oscard = golfie.bind(offset)(oscard, option);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 7;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    offset = 'VOICE_FILTER_APPLY_FAILED';
                    report['type'] = offset;
                    report['voiceFilterId'] = verify;
                    report['error'] = option;
                    report = oscard.bind(golfie)(report);
 303:
                    return tangon;
 306:
                    return zuuluu;
 309:
                    return michal;
 312:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: _loadSignedCatalog2
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 449; continue _fun00003 }
 13:
                    michal = verify.getCatalogNonce;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 413; continue _fun00003 }
 28:
                    michal = verify.getModuleVersion;
                    if(!(zuuluu != michal)) { _fun00004_ip = 413; continue _fun00003 }
 41:
                    michal = verify.getRequestedModelIds;
                    if(!(zuuluu != michal)) { _fun00004_ip = 413; continue _fun00003 }
 54:
                    michal = verify.setCatalog;
                    if(!(zuuluu != michal)) { _fun00004_ip = 413; continue _fun00003 }
 67:
                    michal = verify.getCatalogNonce;
                    offset = michal.bind(verify)();
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 13;
                    michal = report[michal];
                    report = undefined;
                    michal = oscard.bind(report)(michal);
                    golfie = michal.HTTP;
                    oscard = golfie.get;
                    michal = {};
                    option = _closure1_slot8;
                    option = option.VOICE_FILTERS_CATALOG;
                    michal['url'] = option;
                    option = {};
                    yankee = verify.getModuleVersion;
                    yankee = yankee.bind(verify)();
                    option['vfm_version'] = yankee;
                    yankee = verify.getRequestedModelIds;
                    foxtra = yankee.bind(verify)();
                    romeon = foxtra.join;
                    yankee = ',';
                    yankee = romeon.bind(foxtra)(yankee);
                    option['models'] = yankee;
                    option['nonce'] = offset;
                    michal['query'] = option;
                    option = true;
                    michal['rejectWithError'] = option;
                    michal = oscard.bind(golfie)(michal);
                    SaveGenerator(address=200);
 198:
                    return michal;
 200:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 410; continue _fun00003 }
 209:
                    golfie = michal.text;
                    option = michal.body;
                    oscard = michal.headers;
                    oscard = oscard.x-discord-catalog-signature;
                    offset = option.models;
                    if(!(zuuluu != offset)) { _fun00004_ip = 374; continue _fun00003 }
 246:
                    if(!(zuuluu != oscard)) { _fun00004_ip = 338; continue _fun00003 }
 250:
                    zuuluu = verify.setCatalog;
                    zuuluu = zuuluu.bind(verify)(golfie, oscard);
                    SaveGenerator(address=266);
 264:
                    return zuuluu;
 266:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 335; continue _fun00003 }
 272:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 7;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(report)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    verify = 'VOICE_FILTER_CATALOG_FETCH_SUCCESS';
                    tangon['type'] = verify;
                    tangon['catalog'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=323);
 321:
                    return tangon;
 323:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 332; continue _fun00003 }
 329:
                    return report;
 332:
                    return tangon;
 335:
                    return zuuluu;
 338:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    kiloes = 'Voice filters catalog signature is missing';
                    sizing = tangon;
                    zuuluu = new sizing[report](kiloes, backup);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 374:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    kiloes = 'Voice filters catalog response is empty';
                    sizing = tangon;
                    zuuluu = new sizing[report](kiloes, backup);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 410:
                    return michal;
 413:
                    michal = global;
                    tangon = michal.Error;
                    michal = tangon.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: tangon}});
                    kiloes = 'Voice filters signed catalog is not supported';
                    sizing = zuuluu;
                    michal = new sizing[tangon](kiloes, backup);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 449:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _nativeFetchCatalog2
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 272; continue _fun00005 }
 13:
                    tangon = _closure1_slot4;
                    michal = tangon.getToken;
                    oscard = michal.bind(tangon)();
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    michal = 10;
                    michal = offset[michal];
                    tangon = undefined;
                    report = verify.bind(tangon)(michal);
                    michal = report.getSuperPropertiesBase64;
                    report = michal.bind(report)();
                    option = 14;
                    michal = offset[option];
                    foxtra = verify.bind(tangon)(michal);
                    michal = null;
                    romeon = michal != oscard;
                    yankee = 'Authentication token must be available';
                    yankee = foxtra.bind(tangon)(romeon, yankee);
                    option = offset[option];
                    verify = verify.bind(tangon)(option);
                    option = michal != report;
                    michal = 'Analytics superProperties must be available';
                    michal = verify.bind(tangon)(option, michal);
                    michal = golfie.fetchCatalog;
                    michal = michal.bind(golfie)(oscard, report);
                    SaveGenerator(address=135);
 133:
                    return michal;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 269; continue _fun00005 }
 144:
                    report = global;
                    golfie = report.JSON;
                    oscard = golfie.parse;
                    golfie = oscard.bind(golfie)(michal);
                    oscard = golfie.models;
                    if(oscard) { _fun00006_ip = 206; continue _fun00005 }
 172:
                    option = report.Error;
                    report = option.prototype;
                    oscard = Object.create(report, {constructor: {value: option}});
                    kiloes = 'Voice filters catalog response is empty';
                    sizing = oscard;
                    report = new sizing[option](kiloes, backup);
                    report = report instanceof Object ? report : oscard;
                    throw report;
 206:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(tangon)(zuuluu);
                    report = oscard.dispatch;
                    zuuluu = {};
                    option = 'VOICE_FILTER_CATALOG_FETCH_SUCCESS';
                    zuuluu['type'] = option;
                    zuuluu['catalog'] = golfie;
                    zuuluu = report.bind(oscard)(zuuluu);
                    SaveGenerator(address=257);
 255:
                    return zuuluu;
 257:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 266; continue _fun00005 }
 263:
                    return tangon;
 266:
                    return zuuluu;
 269:
                    return michal;
 272:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    report = function() { // Original name: refreshVoiceFiltersCatalog
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = report;
    entity = function() { // Original name: _refreshVoiceFiltersCatalog
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 537; continue _fun00007 }
 12:
                    michal = undefined;
                    tangon = undefined;
                    golfie = _closure1_slot6;
                    oscard = golfie.isNativeModuleLoaded;
                    oscard = oscard.bind(golfie)();
                    if(oscard) { _fun00008_ip = 62; continue _fun00007 }
 36:
                    option = _closure1_slot9;
                    golfie = option.info;
                    oscard = 'Voice Filter catalog refresh ignored, module not loaded.';
                    oscard = golfie.bind(option)(oscard);
                    _fun00008_ip = 534; continue _fun00007;
 62:
                    oscard = _closure1_slot11;
                    if(oscard) { _fun00008_ip = 534; continue _fun00007 }
 72: // try_start_0 // try_start_2
                    oscard = true;
                    _closure1_slot11 = oscard;
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 9;
                    oscard = option[oscard];
                    golfie = golfie.bind(michal)(oscard);
                    oscard = golfie.getVoiceFilters;
                    option = oscard.bind(golfie)();
                    tangon = option;
                    offset = option.getCatalogNonce;
                    option = null;
                    offset = option != offset;
                    verify = offset;
                    if(!offset) { _fun00008_ip = 142; continue _fun00007 }
 129:
                    offset = tangon;
                    offset = offset.getModuleVersion;
                    verify = option != offset;
 142:
                    golfie = verify;
                    if(!verify) { _fun00008_ip = 161; continue _fun00007 }
 148:
                    verify = tangon;
                    verify = verify.getRequestedModelIds;
                    golfie = option != verify;
 161:
                    oscard = golfie;
                    if(!golfie) { _fun00008_ip = 180; continue _fun00007 }
 167:
                    golfie = tangon;
                    golfie = golfie.setCatalog;
                    oscard = option != golfie;
 180:
                    verify = oscard;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    oscard = 15;
                    oscard = option[oscard];
                    option = golfie.bind(michal)(oscard);
                    golfie = option.isVoiceFiltersSignedCatalogEnabled;
                    oscard = {'location': 'refreshVoiceFiltersCatalog', 'autoTrackExposure': true};
                    verify = !verify;
                    oscard['disable'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    if(oscard) { _fun00008_ip = 273; continue _fun00007 }
 239:
                    golfie = tangon;
                    oscard = function() { // Original name: _nativeFetchCatalog
                        entity = undefined;
                        tangon = _closure1_slot14;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    oscard = oscard.bind(michal)(golfie);
                    SaveGenerator(address=258);
 256:
                    return oscard;
 258:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!golfie) { _fun00008_ip = 295; continue _fun00007 }
 264: // try_end0 // try_end2
                    golfie = false;
                    _closure1_slot11 = golfie;
                    return oscard;
 273: // try_start_1 // try_start_3
                    zuuluu = function() { // Original name: _loadSignedCatalog
                        entity = undefined;
                        tangon = _closure1_slot13;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(michal)(tangon);
                    SaveGenerator(address=289);
 287:
                    return zuuluu;
 289:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 300; continue _fun00007 }
 295: // try_end1
                    _fun00008_ip = 507; continue _fun00007;
 300: // try_end3
                    tangon = false;
                    _closure1_slot11 = tangon;
                    return zuuluu;
 309: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    oscard = _closure1_slot9;
                    tangon = oscard.warn;
                    verify = option.message;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    golfie = zuuluu.concat;
                    zuuluu = 'Failed to refresh voice filters catalog: ';
                    zuuluu = golfie.bind(zuuluu)(verify);
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = oscard[zuuluu];
                    offset = tangon.bind(michal)(zuuluu);
                    verify = offset.track;
                    zuuluu = _closure1_slot7;
                    golfie = zuuluu.VOICE_FILTER_ERROR;
                    zuuluu = {};
                    yankee = 'Failed to refresh voice filters catalog';
                    zuuluu['error_message'] = yankee;
                    romeon = _closure1_slot0;
                    yankee = 11;
                    yankee = oscard[yankee];
                    romeon = romeon.bind(michal)(yankee);
                    yankee = romeon.serializeError;
                    yankee = yankee.bind(romeon)(option);
                    zuuluu['cause'] = yankee;
                    zuuluu = verify.bind(offset)(golfie, zuuluu);
                    zuuluu = 12;
                    zuuluu = oscard[zuuluu];
                    golfie = tangon.bind(michal)(zuuluu);
                    zuuluu = golfie.captureException;
                    zuuluu = zuuluu.bind(golfie)(option);
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(michal)(zuuluu);
                    tangon = oscard.dispatch;
                    zuuluu = {};
                    golfie = 'VOICE_FILTER_CATALOG_FETCH_FAILED';
                    zuuluu['type'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=501);
 499:
                    return zuuluu;
 501:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 515; continue _fun00007 }
 507: // try_end4
                    tangon = false;
                    _closure1_slot11 = tangon;
                    _fun00008_ip = 534; continue _fun00007;
 515:
                    tangon = false;
                    _closure1_slot11 = tangon;
                    return zuuluu;
 524: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    tangon = false;
                    _closure1_slot11 = tangon;
                    throw zuuluu;
 534:
                    return michal;
 537:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    tangon = function() { // Original name: maybeSetupVoiceFiltersNativeModule
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = tangon;
    entity = function() { // Original name: _maybeSetupVoiceFiltersNativeModule
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 999; continue _fun00009 }
 12:
                    michal = undefined;
                    oscard = undefined;
                    romeon = undefined;
                    yankee = undefined;
                    tangon = _closure1_slot6;
                    zuuluu = tangon.isNativeModuleLoaded;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00010_ip = 996; continue _fun00009 }
 43:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.isNativeModuleLoading;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00010_ip = 996; continue _fun00009 }
 65:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    report = 16;
                    zuuluu = zuuluu[report];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.isWindows;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00010_ip = 205; continue _fun00009 }
 98:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.isMac;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00010_ip = 205; continue _fun00009 }
 128:
                    tangon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = foxtra[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    option = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    zuuluu['type'] = option;
                    verify = _closure1_slot0;
                    option = 8;
                    option = foxtra[option];
                    option = verify.bind(michal)(option);
                    option = option.VoiceFilterNativeModuleState;
                    option = option.UNSUPPORTED;
                    zuuluu['state'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00010_ip = 996; continue _fun00009;
 205: // try_start_0
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    option = 7;
                    report = zuuluu[option];
                    foxtra = tangon.bind(michal)(report);
                    verify = foxtra.dispatch;
                    report = {};
                    kiloes = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    report['type'] = kiloes;
                    output = _closure1_slot0;
                    sizing = 8;
                    backup = zuuluu[sizing];
                    backup = output.bind(michal)(backup);
                    backup = backup.VoiceFilterNativeModuleState;
                    backup = backup.LOADING;
                    report['state'] = backup;
                    report = verify.bind(foxtra)(report);
                    verify = 9;
                    zuuluu = zuuluu[verify];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.ensureModule;
                    zuuluu = 'discord_voice_filters';
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=310);
 308:
                    return zuuluu;
 310:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00010_ip = 779; continue _fun00009 }
 319:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[verify];
                    report = report.bind(michal)(tangon);
                    tangon = report.getVoiceFilters;
                    report = tangon.bind(report)();
                    oscard = report;
                    tangon = report.setupResources;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=365);
 363:
                    return tangon;
 365:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 776; continue _fun00009 }
 374:
                    report = oscard;
                    report = report.setVoiceFilterLaggingCallback;
                    if(!(michal !== report)) { _fun00010_ip = 418; continue _fun00009 }
 387:
                    foxtra = oscard;
                    verify = foxtra.setVoiceFilterLaggingCallback;
                    report = _closure1_slot10;
                    report = verify.bind(foxtra)(report);
                    SaveGenerator(address=409);
 407:
                    return report;
 409:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 773; continue _fun00009 }
 418:
                    verify = oscard;
                    verify = verify.setVoiceFilterReadyCallback;
                    if(!(michal !== verify)) { _fun00010_ip = 465; continue _fun00009 }
 431:
                    foxtra = oscard;
                    verify = foxtra.setVoiceFilterReadyCallback;
                    oscard = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 7;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'VOICE_FILTER_READY';
                        michal['type'] = report;
                        report = argFoo;
                        michal['name'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    oscard = verify.bind(foxtra)(oscard);
                    SaveGenerator(address=456);
 454:
                    return oscard;
 456:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 770; continue _fun00009 }
 465:
                    verify = _closure1_slot1;
                    backup = _closure1_slot2;
                    option = backup[option];
                    foxtra = verify.bind(michal)(option);
                    verify = foxtra.dispatch;
                    option = {};
                    option['type'] = kiloes;
                    kiloes = _closure1_slot0;
                    backup = backup[sizing];
                    backup = kiloes.bind(michal)(backup);
                    backup = backup.VoiceFilterNativeModuleState;
                    backup = backup.LOADED;
                    option['state'] = backup;
                    option = verify.bind(foxtra)(option);
                    SaveGenerator(address=531);
 529:
                    return option;
 531:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 767; continue _fun00009 }
 540:
                    verify = _closure1_slot15;
                    verify = verify.bind(michal)();
                    SaveGenerator(address=552);
 550:
                    return verify;
 552:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=12);
                    if(foxtra) { _fun00010_ip = 764; continue _fun00009 }
 561:
                    backup = _closure1_slot5;
                    foxtra = backup.getMostRecentlyRequestedVoiceFilter;
                    backup = foxtra.bind(backup)();
                    yankee = backup;
                    foxtra = null;
                    if(!(foxtra != backup)) { _fun00010_ip = 694; continue _fun00009 }
 586:
                    sizing = _closure1_slot6;
                    kiloes = sizing.getVoiceFilter;
                    backup = yankee;
                    backup = kiloes.bind(sizing)(backup);
                    romeon = backup;
                    kiloes = foxtra == backup;
                    backup = undefined;
                    if(kiloes) { _fun00010_ip = 624; continue _fun00009 }
 618:
                    backup = romeon.available;
 624:
                    romeon = true;
                    if(!(romeon === backup)) { _fun00010_ip = 663; continue _fun00009 }
 630:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    romeon = 17;
                    romeon = kiloes[romeon];
                    backup = backup.bind(michal)(romeon);
                    romeon = backup.requestVoiceFilterSwitch;
                    yankee = romeon.bind(backup)(yankee);
                    _fun00010_ip = 694; continue _fun00009;
 663:
                    romeon = _closure1_slot0;
                    backup = _closure1_slot2;
                    yankee = 17;
                    yankee = backup[yankee];
                    romeon = romeon.bind(michal)(yankee);
                    yankee = romeon.requestVoiceFilterSwitch;
                    yankee = yankee.bind(romeon)(foxtra);
 694:
                    romeon = _closure1_slot5;
                    yankee = romeon.getMediaEngine;
                    foxtra = yankee.bind(romeon)();
                    romeon = foxtra.on;
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    yankee = 18;
                    yankee = kiloes[yankee];
                    yankee = backup.bind(michal)(yankee);
                    yankee = yankee.MediaEngineEvent;
                    yankee = yankee.VoiceFiltersFailed;
                    offset = function(argFoo) {
                        report = argFoo;
                        tangon = _closure1_slot9;
                        zuuluu = tangon.warn;
                        michal = global;
                        entity = michal.HermesInternal;
                        oscard = entity.concat;
                        entity = 'Voice Filters failed in process: ';
                        entity = oscard.bind(entity)(report);
                        entity = zuuluu.bind(tangon)(entity);
                        tangon = _closure1_slot1;
                        oscard = _closure1_slot2;
                        entity = 10;
                        zuuluu = oscard[entity];
                        entity = undefined;
                        offset = tangon.bind(entity)(zuuluu);
                        verify = offset.track;
                        zuuluu = _closure1_slot7;
                        option = zuuluu.VOICE_FILTER_ERROR;
                        zuuluu = {};
                        golfie = 'Voice Filters failed in process';
                        zuuluu['error_message'] = golfie;
                        romeon = _closure1_slot0;
                        yankee = 11;
                        yankee = oscard[yankee];
                        foxtra = romeon.bind(entity)(yankee);
                        romeon = foxtra.serializeError;
                        yankee = michal.Error;
                        backup = yankee.prototype;
                        backup = Object.create(backup, {constructor: {value: yankee}});
                        output = backup;
                        sizing = report;
                        yankee = new output[yankee](sizing, kiloes);
                        yankee = yankee instanceof Object ? yankee : backup;
                        yankee = romeon.bind(foxtra)(yankee);
                        zuuluu['cause'] = yankee;
                        zuuluu = verify.bind(offset)(option, zuuluu);
                        zuuluu = 12;
                        zuuluu = oscard[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.captureException;
                        oscard = michal.Error;
                        michal = {};
                        michal['cause'] = report;
                        report = oscard.prototype;
                        report = Object.create(report, {constructor: {value: oscard}});
                        output = report;
                        sizing = golfie;
                        kiloes = michal;
                        michal = new output[oscard](sizing, kiloes, backup);
                        michal = michal instanceof Object ? michal : report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    offset = romeon.bind(foxtra)(yankee, offset);
 759: // try_end0
                    _fun00010_ip = 996; continue _fun00009;
 764:
                    return verify;
 767:
                    return option;
 770:
                    return oscard;
 773:
                    return report;
 776:
                    return tangon;
 779:
                    return zuuluu;
 782: // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot9;
                    tangon = report.warn;
                    verify = oscard.message;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    option = zuuluu.concat;
                    zuuluu = 'Failed to load Voice Filters module: ';
                    zuuluu = option.bind(zuuluu)(verify);
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = option[zuuluu];
                    offset = tangon.bind(michal)(zuuluu);
                    verify = offset.track;
                    zuuluu = _closure1_slot7;
                    report = zuuluu.VOICE_FILTER_ERROR;
                    zuuluu = {};
                    yankee = 'Failed to load Voice Filters module';
                    zuuluu['error_message'] = yankee;
                    golfie = _closure1_slot0;
                    yankee = 11;
                    yankee = option[yankee];
                    romeon = golfie.bind(michal)(yankee);
                    yankee = romeon.serializeError;
                    yankee = yankee.bind(romeon)(oscard);
                    zuuluu['cause'] = yankee;
                    zuuluu = verify.bind(offset)(report, zuuluu);
                    zuuluu = 12;
                    zuuluu = option[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    zuuluu = report.captureException;
                    zuuluu = zuuluu.bind(report)(oscard);
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    zuuluu['type'] = oscard;
                    oscard = 8;
                    oscard = option[oscard];
                    oscard = golfie.bind(michal)(oscard);
                    oscard = oscard.VoiceFilterNativeModuleState;
                    oscard = oscard.FAILED;
                    zuuluu['state'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 996:
                    return michal;
 999:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    verify = {};
    oscard = true;
    verify['value'] = oscard;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, verify);
    entity = 0;
    verify = option[entity];
    entity = undefined;
    verify = offset.bind(entity)(verify);
    var _closure1_slot3 = verify;
    verify = 1;
    verify = option[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 2;
    verify = option[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 3;
    verify = option[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    offset = verify.AnalyticEvents;
    var _closure1_slot7 = offset;
    verify = verify.Endpoints;
    var _closure1_slot8 = verify;
    verify = 5;
    verify = option[verify];
    verify = golfie.bind(entity)(verify);
    yankee = verify.Logger;
    verify = yankee.prototype;
    offset = Object.create(verify, {constructor: {value: yankee}});
    kiloes = 'VoiceFilterActionCreators';
    sizing = offset;
    verify = new sizing[yankee](kiloes, backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot9 = verify;
    verify = 6;
    verify = option[verify];
    romeon = golfie.bind(entity)(verify);
    yankee = romeon.debounce;
    offset = {};
    offset['leading'] = oscard;
    verify = function() {
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'VOICE_FILTER_LAGGING';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    oscard = 1000;
    oscard = yankee.bind(romeon)(verify, oscard, offset);
    var _closure1_slot10 = oscard;
    oscard = false;
    var _closure1_slot11 = oscard;
    oscard = 19;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/voice_filters/web/VoiceFilterActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: downloadVoiceFilterDependency
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            offset = argFoo;
            backup = arguments[1];
            var _closure2_slot0 = offset;
            entity = undefined;
            if(!(backup === entity)) { _fun00012_ip = 20; continue _fun00011 }
 18:
            backup = null;
 20:
            var _closure2_slot1 = backup;
            var _closure2_slot2 = entity;
            golfie = offset.url;
            option = offset.modelId;
            _closure2_slot2 = option;
            oscard = offset.fileName;
            report = _closure1_slot6;
            tangon = report.getModelState;
            tangon = tangon.bind(report)(option);
            report = null;
            option = report == tangon;
            yankee = undefined;
            if(option) { _fun00012_ip = 85; continue _fun00011 }
 80:
            yankee = tangon.status;
 85:
            romeon = _closure1_slot0;
            option = _closure1_slot2;
            verify = 8;
            option = option[verify];
            option = romeon.bind(entity)(option);
            option = option.VoiceFilterModelStatus;
            option = option.DOWNLOADED;
            if(!(yankee === option)) { _fun00012_ip = 200; continue _fun00011 }
 121:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            option = 7;
            option = romeon[option];
            romeon = yankee.bind(entity)(option);
            yankee = romeon.dispatch;
            option = {};
            foxtra = 'VOICE_FILTER_FILE_READY';
            option['type'] = foxtra;
            result = option;
            output = offset;
            foxtra = copyDataProperties(result, output);
            kiloes = false;
            foxtra = 'fetchedFromNetwork';
            option[foxtra] = kiloes;
            foxtra = 'analyticsContext';
            option[foxtra] = backup;
            option = yankee.bind(romeon)(option);
            _fun00012_ip = 366; continue _fun00011;
 200:
            option = report == tangon;
            report = undefined;
            if(option) { _fun00012_ip = 214; continue _fun00011 }
 209:
            report = tangon.status;
 214:
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[verify];
            tangon = option.bind(entity)(tangon);
            tangon = tangon.VoiceFilterModelStatus;
            tangon = tangon.DOWNLOADING;
            if(!(report !== tangon)) { _fun00012_ip = 366; continue _fun00011 }
 247:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 7;
            zuuluu = report[zuuluu];
            verify = tangon.bind(entity)(zuuluu);
            option = verify.dispatch;
            zuuluu = {};
            yankee = 'VOICE_FILTER_DOWNLOAD_STARTED';
            zuuluu['type'] = yankee;
            result = zuuluu;
            output = offset;
            offset = copyDataProperties(result, output);
            zuuluu = option.bind(verify)(zuuluu);
            zuuluu = 9;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.downloadVoiceFilterFile;
            zuuluu = function(argFoo) {
                entity = argFoo;
                golfie = entity.downloadedBytes;
                oscard = entity.totalBytes;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'VOICE_FILTER_DOWNLOAD_PROGRESS';
                michal['type'] = report;
                option = _closure2_slot0;
                verify = michal;
                report = copyDataProperties(verify, option);
                report = 'downloadedBytes';
                michal[report] = golfie;
                report = 'totalBytes';
                michal[report] = oscard;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            report = tangon.bind(report)(golfie, oscard, zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'VOICE_FILTER_FILE_READY';
                michal['type'] = report;
                option = _closure2_slot0;
                verify = michal;
                oscard = copyDataProperties(verify, option);
                oscard = argFoo;
                golfie = oscard.fetchedFromNetwork;
                oscard = 'fetchedFromNetwork';
                michal[oscard] = golfie;
                oscard = _closure2_slot1;
                report = 'analyticsContext';
                michal[report] = oscard;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.catch;
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    oscard = argFoo;
                    entity = null;
                    if(!(entity != oscard)) { _fun00014_ip = 23; continue _fun00013 }
 9:
                    entity = oscard.USER_CANCELED_DOWNLOAD;
                    if(entity) { _fun00014_ip = 276; continue _fun00013 }
 23:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.error;
                    michal = {};
                    michal['reason'] = oscard;
                    sizing = _closure2_slot0;
                    output = michal;
                    report = copyDataProperties(output, sizing);
                    option = 'Failed to download voice filter dependency';
                    michal = zuuluu.bind(tangon)(option, michal);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 10;
                    michal = report[michal];
                    zuuluu = undefined;
                    yankee = tangon.bind(zuuluu)(michal);
                    offset = yankee.track;
                    michal = _closure1_slot7;
                    verify = michal.VOICE_FILTER_ERROR;
                    michal = {};
                    michal['error_message'] = option;
                    romeon = _closure1_slot0;
                    entity = 11;
                    entity = report[entity];
                    backup = romeon.bind(zuuluu)(entity);
                    foxtra = backup.serializeError;
                    entity = global;
                    romeon = entity.Error;
                    kiloes = romeon.prototype;
                    kiloes = Object.create(kiloes, {constructor: {value: romeon}});
                    result = kiloes;
                    output = oscard;
                    romeon = new result[romeon](output, sizing);
                    romeon = romeon instanceof Object ? romeon : kiloes;
                    romeon = foxtra.bind(backup)(romeon);
                    michal['cause'] = romeon;
                    michal = offset.bind(yankee)(verify, michal);
                    michal = 12;
                    michal = report[michal];
                    tangon = tangon.bind(zuuluu)(michal);
                    zuuluu = tangon.captureException;
                    report = entity.Error;
                    entity = {};
                    entity['cause'] = oscard;
                    michal = report.prototype;
                    michal = Object.create(michal, {constructor: {value: report}});
                    result = michal;
                    output = option;
                    sizing = entity;
                    entity = new result[report](output, sizing, kiloes);
                    michal = entity instanceof Object ? entity : michal;
                    entity = {};
                    report = {};
                    golfie = _closure2_slot2;
                    report['modelId'] = golfie;
                    entity['tags'] = report;
                    report = {};
                    report['reason'] = oscard;
                    entity['extra'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    _fun00014_ip = 308; continue _fun00013;
 276:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.info;
                    michal = _closure2_slot0;
                    entity = 'User canceled the download for Voice Filter dependency';
                    entity = zuuluu.bind(tangon)(entity, michal);
 308:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'VOICE_FILTER_DOWNLOAD_FAILED';
                    michal['type'] = report;
                    sizing = _closure2_slot0;
                    output = michal;
                    report = copyDataProperties(output, sizing);
                    report = 'error';
                    michal[report] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 366:
            return entity;
        }
    };
    zuuluu['downloadVoiceFilterDependency'] = oscard;
    oscard = function() { // Original name: applyVoiceFilterInNativeModule
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['applyVoiceFilterInNativeModule'] = oscard;
    zuuluu['refreshVoiceFiltersCatalog'] = report;
    report = function() { // Original name: cancelVoiceFilterDownload
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'VOICE_FILTER_DOWNLOAD_CANCELED';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['cancelVoiceFilterDownload'] = report;
    zuuluu['maybeSetupVoiceFiltersNativeModule'] = tangon;
    michal = function(argFoo) { // Original name: setVoiceFilterModelState
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'VOICE_FILTER_SET_MODEL_STATE';
        michal['type'] = report;
        report = argFoo;
        michal['modelState'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setVoiceFilterModelState'] = michal;
    return entity;
})();