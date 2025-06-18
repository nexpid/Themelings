// app/modules/voice_filters/web/VoiceFilterActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot15;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot15;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _applyVoiceFilterInNativeModule
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 334; continue _fun00007 }
 13:
                    verify = argFoo;
                    tangon = undefined;
                    if(!(michal === tangon)) { _fun00008_ip = 24; continue _fun00007 }
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
                    if(zuuluu) { _fun00008_ip = 331; continue _fun00007 }
 42:
                    zuuluu = _closure1_slot22;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=57);
 55:
                    return zuuluu;
 57:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00008_ip = 328; continue _fun00007 }
 66:
                    romeon = global;
                    golfie = romeon.performance;
                    oscard = golfie.now;
                    yankee = oscard.bind(golfie)();
 83: // try_start_0
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 10;
                    oscard = option[oscard];
                    golfie = golfie.bind(tangon)(oscard);
                    oscard = golfie.getVoiceFilters;
                    option = oscard.bind(golfie)();
                    backup = _closure1_slot10;
                    golfie = backup.info;
                    offset = verify;
                    oscard = 'Setting voice filter in native module:';
                    oscard = golfie.bind(backup)(oscard, offset);
                    golfie = option.setVoiceFilter;
                    oscard = {};
                    oscard['name'] = offset;
                    oscard = golfie.bind(option)(oscard);
                    SaveGenerator(address=161);
 159:
                    return oscard;
 161:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 250; continue _fun00007 }
 167:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 8;
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
 248: // try_end0
                    _fun00008_ip = 325; continue _fun00007;
 250:
                    return oscard;
 253: // catch_target0
                    CatchBlockStart(arg_register=7);
                    offset = _closure1_slot10;
                    golfie = offset.error;
                    oscard = 'failed to set voice filter';
                    oscard = golfie.bind(offset)(oscard, option);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 8;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    offset = 'VOICE_FILTER_APPLY_FAILED';
                    report['type'] = offset;
                    report['voiceFilterId'] = verify;
                    report['error'] = option;
                    report = oscard.bind(golfie)(report);
 325:
                    return tangon;
 328:
                    return zuuluu;
 331:
                    return michal;
 334:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: _loadSignedCatalog2
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 386; continue _fun00009 }
 13:
                    michal = golfie.getCatalogNonce;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00010_ip = 350; continue _fun00009 }
 28:
                    michal = golfie.getModuleVersion;
                    if(!(zuuluu != michal)) { _fun00010_ip = 350; continue _fun00009 }
 41:
                    michal = golfie.getRequestedModelIds;
                    if(!(zuuluu != michal)) { _fun00010_ip = 350; continue _fun00009 }
 54:
                    michal = golfie.setCatalog;
                    if(!(zuuluu != michal)) { _fun00010_ip = 350; continue _fun00009 }
 67:
                    michal = golfie.getCatalogNonce;
                    option = michal.bind(golfie)();
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 14;
                    tangon = tangon[michal];
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {};
                    oscard = _closure1_slot9;
                    oscard = oscard.VOICE_FILTERS_CATALOG;
                    michal['url'] = oscard;
                    oscard = {};
                    verify = golfie.getModuleVersion;
                    verify = verify.bind(golfie)();
                    oscard['vfm_version'] = verify;
                    verify = golfie.getRequestedModelIds;
                    yankee = verify.bind(golfie)();
                    offset = yankee.join;
                    verify = ',';
                    verify = offset.bind(yankee)(verify);
                    oscard['models'] = verify;
                    oscard['nonce'] = option;
                    michal['query'] = oscard;
                    oscard = true;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=200);
 198:
                    return michal;
 200:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00010_ip = 347; continue _fun00009 }
 209:
                    oscard = michal.text;
                    tangon = michal.body;
                    report = michal.headers;
                    report = report.x-discord-catalog-signature;
                    option = tangon.models;
                    if(!(zuuluu != option)) { _fun00010_ip = 311; continue _fun00009 }
 243:
                    if(!(zuuluu != report)) { _fun00010_ip = 275; continue _fun00009 }
 247:
                    zuuluu = golfie.setCatalog;
                    zuuluu = zuuluu.bind(golfie)(oscard, report);
                    SaveGenerator(address=263);
 261:
                    return zuuluu;
 263:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 272; continue _fun00009 }
 269:
                    return tangon;
 272:
                    return zuuluu;
 275:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    foxtra = 'Voice filters catalog signature is missing';
                    backup = tangon;
                    zuuluu = new backup[report](foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 311:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    foxtra = 'Voice filters catalog response is empty';
                    backup = tangon;
                    zuuluu = new backup[report](foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 347:
                    return michal;
 350:
                    michal = global;
                    tangon = michal.Error;
                    michal = tangon.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: tangon}});
                    foxtra = 'Voice filters signed catalog is not supported';
                    backup = zuuluu;
                    michal = new backup[tangon](foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 386:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _nativeFetchCatalog2
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 209; continue _fun00011 }
 13:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getToken;
                    tangon = zuuluu.bind(tangon)();
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 11;
                    michal = verify[michal];
                    option = undefined;
                    zuuluu = golfie.bind(option)(michal);
                    michal = zuuluu.getSuperPropertiesBase64;
                    zuuluu = michal.bind(zuuluu)();
                    oscard = 15;
                    michal = verify[oscard];
                    romeon = golfie.bind(option)(michal);
                    michal = null;
                    yankee = michal != tangon;
                    offset = 'Authentication token must be available';
                    offset = romeon.bind(option)(yankee, offset);
                    oscard = verify[oscard];
                    golfie = golfie.bind(option)(oscard);
                    oscard = michal != zuuluu;
                    michal = 'Analytics superProperties must be available';
                    michal = golfie.bind(option)(oscard, michal);
                    michal = report.fetchCatalog;
                    michal = michal.bind(report)(tangon, zuuluu);
                    SaveGenerator(address=135);
 133:
                    return michal;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 206; continue _fun00011 }
 141:
                    tangon = global;
                    report = tangon.JSON;
                    zuuluu = report.parse;
                    zuuluu = zuuluu.bind(report)(michal);
                    report = zuuluu.models;
                    if(report) { _fun00012_ip = 203; continue _fun00011 }
 169:
                    oscard = tangon.Error;
                    tangon = oscard.prototype;
                    report = Object.create(tangon, {constructor: {value: oscard}});
                    backup = 'Voice filters catalog response is empty';
                    kiloes = report;
                    tangon = new kiloes[oscard](backup, foxtra);
                    tangon = tangon instanceof Object ? tangon : report;
                    throw tangon;
 203:
                    return zuuluu;
 206:
                    return michal;
 209:
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
    entity = function() { // Original name: _scanModelState2
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 346; continue _fun00013 }
 12:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    offset = 10;
                    michal = michal[offset];
                    golfie = undefined;
                    tangon = tangon.bind(golfie)(michal);
                    michal = tangon.canCheckVoiceFilterFilesExist;
                    michal = michal.bind(tangon)();
                    if(michal) { _fun00014_ip = 53; continue _fun00013 }
 50:
                    return golfie;
 53:
                    michal = global;
                    oscard = michal.Object;
                    tangon = oscard.keys;
                    michal = argFoo;
                    michal = michal.models;
                    oscard = tangon.bind(oscard)(michal);
                    tangon = oscard.map;
                    michal = function(argFoo) {
                        tangon = argFoo;
                        entity = {};
                        entity['id'] = tangon;
                        zuuluu = _closure1_slot7;
                        michal = undefined;
                        michal = zuuluu.bind(michal)(tangon);
                        entity['fileName'] = michal;
                        return entity;
                    };
                    option = tangon.bind(oscard)(michal);
                    tangon = {};
                    oscard = _closure1_slot14;
                    verify = _closure1_slot1;
                    michal = _closure1_slot2;
                    michal = michal[offset];
                    verify = verify.bind(golfie)(michal);
                    michal = verify.checkVoiceFilterFilesExist;
                    michal = michal.bind(verify)(option);
                    SaveGenerator(address=135);
 133:
                    return michal;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                    if(verify) { _fun00014_ip = 343; continue _fun00013 }
 144:
                    yankee = oscard.bind(golfie)(michal);
                    verify = yankee.bind(golfie)();
                    oscard = verify.done;
                    offset = 9;
                    if(oscard) { _fun00014_ip = 245; continue _fun00013 }
 164:
                    oscard = verify.value;
                    romeon = oscard.id;
                    foxtra = oscard.exists;
                    oscard = {};
                    kiloes = _closure1_slot0;
                    backup = _closure1_slot2;
                    backup = backup[offset];
                    backup = kiloes.bind(golfie)(backup);
                    backup = backup.VoiceFilterModelStatus;
                    if(foxtra) { _fun00014_ip = 216; continue _fun00013 }
 208:
                    foxtra = backup.MISSING;
                    _fun00014_ip = 222; continue _fun00013;
 216:
                    foxtra = backup.DOWNLOADED;
 222:
                    oscard['status'] = foxtra;
                    tangon[romeon] = oscard;
                    romeon = yankee.bind(golfie)();
                    oscard = romeon.done;
                    verify = romeon;
                    if(!oscard) { _fun00014_ip = 164; continue _fun00013 }
 245:
                    oscard = option.map;
                    report = function(argFoo) {
                        entity = argFoo;
                        entity = entity.fileName;
                        return entity;
                    };
                    oscard = oscard.bind(option)(report);
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 16;
                    report = verify[report];
                    option = option.bind(golfie)(report);
                    report = option.arrayIsNotEmpty;
                    report = report.bind(option)(oscard);
                    if(!report) { _fun00014_ip = 337; continue _fun00013 }
 296:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 17;
                    zuuluu = option[zuuluu];
                    report = report.bind(golfie)(zuuluu);
                    zuuluu = report.cleanupUnusedVoiceFilterFiles;
                    zuuluu = zuuluu.bind(report)(oscard);
                    SaveGenerator(address=331);
 329:
                    return zuuluu;
 331:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 340; continue _fun00013 }
 337:
                    return tangon;
 340:
                    return zuuluu;
 343:
                    return michal;
 346:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot19 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    report = function() { // Original name: refreshVoiceFiltersCatalog
        entity = undefined;
        tangon = _closure1_slot21;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = report;
    entity = function() { // Original name: _refreshVoiceFiltersCatalog
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 690; continue _fun00015 }
 12:
                    michal = undefined;
                    offset = undefined;
                    zuuluu = undefined;
                    golfie = _closure1_slot6;
                    oscard = golfie.isNativeModuleLoaded;
                    oscard = oscard.bind(golfie)();
                    if(oscard) { _fun00016_ip = 64; continue _fun00015 }
 38:
                    option = _closure1_slot10;
                    golfie = option.info;
                    oscard = 'Voice Filter catalog refresh ignored, module not loaded.';
                    oscard = golfie.bind(option)(oscard);
                    _fun00016_ip = 687; continue _fun00015;
 64:
                    oscard = _closure1_slot12;
                    if(oscard) { _fun00016_ip = 687; continue _fun00015 }
 74: // try_start_0 // try_start_2
                    oscard = true;
                    _closure1_slot12 = oscard;
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 10;
                    oscard = option[oscard];
                    golfie = golfie.bind(michal)(oscard);
                    oscard = golfie.getVoiceFilters;
                    golfie = oscard.bind(golfie)();
                    zuuluu = golfie;
                    yankee = golfie.getCatalogNonce;
                    golfie = null;
                    yankee = golfie != yankee;
                    verify = yankee;
                    if(!yankee) { _fun00016_ip = 144; continue _fun00015 }
 131:
                    yankee = zuuluu;
                    yankee = yankee.getModuleVersion;
                    verify = golfie != yankee;
 144:
                    option = verify;
                    if(!verify) { _fun00016_ip = 163; continue _fun00015 }
 150:
                    verify = zuuluu;
                    verify = verify.getRequestedModelIds;
                    option = golfie != verify;
 163:
                    oscard = option;
                    if(!option) { _fun00016_ip = 182; continue _fun00015 }
 169:
                    option = zuuluu;
                    option = option.setCatalog;
                    oscard = golfie != option;
 182:
                    yankee = oscard;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 18;
                    oscard = verify[oscard];
                    verify = option.bind(michal)(oscard);
                    option = verify.isVoiceFiltersSignedCatalogEnabled;
                    oscard = {'location': 'refreshVoiceFiltersCatalog', 'autoTrackExposure': true};
                    yankee = !yankee;
                    oscard['disable'] = yankee;
                    oscard = option.bind(verify)(oscard);
                    if(oscard) { _fun00016_ip = 281; continue _fun00015 }
 241:
                    option = zuuluu;
                    oscard = function() { // Original name: _nativeFetchCatalog
                        entity = undefined;
                        tangon = _closure1_slot18;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    option = oscard.bind(michal)(option);
                    SaveGenerator(address=260);
 258:
                    return option;
 260:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=5);
                    verify = oscard;
                    oscard = option;
                    if(!verify) { _fun00016_ip = 312; continue _fun00015 }
 272: // try_end0 // try_end2
                    verify = false;
                    _closure1_slot12 = verify;
                    return option;
 281: // try_start_1 // try_start_3
                    option = zuuluu;
                    zuuluu = function() { // Original name: _loadSignedCatalog
                        entity = undefined;
                        tangon = _closure1_slot17;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(michal)(option);
                    SaveGenerator(address=300);
 298:
                    return zuuluu;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    oscard = zuuluu;
                    if(option) { _fun00016_ip = 453; continue _fun00015 }
 312:
                    offset = oscard;
                    option = _closure1_slot6;
                    oscard = option.getCatalogLastFetchTime;
                    oscard = oscard.bind(option)();
                    oscard = golfie == oscard;
                    verify = undefined;
                    if(!oscard) { _fun00016_ip = 368; continue _fun00015 }
 340:
                    oscard = offset;
                    tangon = function() { // Original name: _scanModelState
                        entity = undefined;
                        tangon = _closure1_slot19;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    tangon = tangon.bind(michal)(oscard);
                    SaveGenerator(address=359);
 357:
                    return tangon;
 359:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    verify = tangon;
                    if(oscard) { _fun00016_ip = 444; continue _fun00015 }
 368:
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 8;
                    oscard = option[oscard];
                    option = golfie.bind(michal)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    yankee = 'VOICE_FILTER_CATALOG_FETCH_SUCCESS';
                    oscard['type'] = yankee;
                    oscard['catalog'] = offset;
                    oscard['initialModelState'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    SaveGenerator(address=424);
 422:
                    return oscard;
 424:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00016_ip = 435; continue _fun00015 }
 430: // try_end1
                    _fun00016_ip = 660; continue _fun00015;
 435: // try_end3
                    golfie = false;
                    _closure1_slot12 = golfie;
                    return oscard;
 444:
                    oscard = false;
                    _closure1_slot12 = oscard;
                    return tangon;
 453:
                    tangon = false;
                    _closure1_slot12 = tangon;
                    return zuuluu;
 462: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    oscard = _closure1_slot10;
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
                    zuuluu = 11;
                    zuuluu = oscard[zuuluu];
                    offset = tangon.bind(michal)(zuuluu);
                    verify = offset.track;
                    zuuluu = _closure1_slot8;
                    golfie = zuuluu.VOICE_FILTER_ERROR;
                    zuuluu = {};
                    yankee = 'Failed to refresh voice filters catalog';
                    zuuluu['error_message'] = yankee;
                    romeon = _closure1_slot0;
                    yankee = 12;
                    yankee = oscard[yankee];
                    romeon = romeon.bind(michal)(yankee);
                    yankee = romeon.serializeError;
                    yankee = yankee.bind(romeon)(option);
                    zuuluu['cause'] = yankee;
                    zuuluu = verify.bind(offset)(golfie, zuuluu);
                    zuuluu = 13;
                    zuuluu = oscard[zuuluu];
                    golfie = tangon.bind(michal)(zuuluu);
                    zuuluu = golfie.captureException;
                    zuuluu = zuuluu.bind(golfie)(option);
                    zuuluu = 8;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(michal)(zuuluu);
                    tangon = oscard.dispatch;
                    zuuluu = {};
                    golfie = 'VOICE_FILTER_CATALOG_FETCH_FAILED';
                    zuuluu['type'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=654);
 652:
                    return zuuluu;
 654:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00016_ip = 668; continue _fun00015 }
 660: // try_end4
                    tangon = false;
                    _closure1_slot12 = tangon;
                    _fun00016_ip = 687; continue _fun00015;
 668:
                    tangon = false;
                    _closure1_slot12 = tangon;
                    return zuuluu;
 677: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    tangon = false;
                    _closure1_slot12 = tangon;
                    throw zuuluu;
 687:
                    return michal;
 690:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot21 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    michal = function() { // Original name: maybeSetupVoiceFiltersNativeModule
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = michal;
    entity = function() { // Original name: _maybeSetupVoiceFiltersNativeModule
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 999; continue _fun00017 }
 12:
                    michal = undefined;
                    oscard = undefined;
                    romeon = undefined;
                    yankee = undefined;
                    tangon = _closure1_slot6;
                    zuuluu = tangon.isNativeModuleLoaded;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00018_ip = 996; continue _fun00017 }
 43:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.isNativeModuleLoading;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00018_ip = 996; continue _fun00017 }
 65:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    report = 19;
                    zuuluu = zuuluu[report];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.isWindows;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00018_ip = 205; continue _fun00017 }
 98:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.isMac;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00018_ip = 205; continue _fun00017 }
 128:
                    tangon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = foxtra[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    option = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    zuuluu['type'] = option;
                    verify = _closure1_slot0;
                    option = 9;
                    option = foxtra[option];
                    option = verify.bind(michal)(option);
                    option = option.VoiceFilterNativeModuleState;
                    option = option.UNSUPPORTED;
                    zuuluu['state'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00018_ip = 996; continue _fun00017;
 205: // try_start_0
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    option = 8;
                    report = zuuluu[option];
                    foxtra = tangon.bind(michal)(report);
                    verify = foxtra.dispatch;
                    report = {};
                    kiloes = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    report['type'] = kiloes;
                    output = _closure1_slot0;
                    sizing = 9;
                    backup = zuuluu[sizing];
                    backup = output.bind(michal)(backup);
                    backup = backup.VoiceFilterNativeModuleState;
                    backup = backup.LOADING;
                    report['state'] = backup;
                    report = verify.bind(foxtra)(report);
                    verify = 10;
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
                    if(tangon) { _fun00018_ip = 779; continue _fun00017 }
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
                    if(report) { _fun00018_ip = 776; continue _fun00017 }
 374:
                    report = oscard;
                    report = report.setVoiceFilterLaggingCallback;
                    if(!(michal !== report)) { _fun00018_ip = 418; continue _fun00017 }
 387:
                    foxtra = oscard;
                    verify = foxtra.setVoiceFilterLaggingCallback;
                    report = _closure1_slot11;
                    report = verify.bind(foxtra)(report);
                    SaveGenerator(address=409);
 407:
                    return report;
 409:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00018_ip = 773; continue _fun00017 }
 418:
                    verify = oscard;
                    verify = verify.setVoiceFilterReadyCallback;
                    if(!(michal !== verify)) { _fun00018_ip = 465; continue _fun00017 }
 431:
                    foxtra = oscard;
                    verify = foxtra.setVoiceFilterReadyCallback;
                    oscard = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 8;
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
                    if(verify) { _fun00018_ip = 770; continue _fun00017 }
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
                    if(verify) { _fun00018_ip = 767; continue _fun00017 }
 540:
                    verify = _closure1_slot20;
                    verify = verify.bind(michal)();
                    SaveGenerator(address=552);
 550:
                    return verify;
 552:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=12);
                    if(foxtra) { _fun00018_ip = 764; continue _fun00017 }
 561:
                    backup = _closure1_slot5;
                    foxtra = backup.getMostRecentlyRequestedVoiceFilter;
                    backup = foxtra.bind(backup)();
                    yankee = backup;
                    foxtra = null;
                    if(!(foxtra != backup)) { _fun00018_ip = 694; continue _fun00017 }
 586:
                    sizing = _closure1_slot6;
                    kiloes = sizing.getVoiceFilter;
                    backup = yankee;
                    backup = kiloes.bind(sizing)(backup);
                    romeon = backup;
                    kiloes = foxtra == backup;
                    backup = undefined;
                    if(kiloes) { _fun00018_ip = 624; continue _fun00017 }
 618:
                    backup = romeon.available;
 624:
                    romeon = true;
                    if(!(romeon === backup)) { _fun00018_ip = 663; continue _fun00017 }
 630:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    romeon = 20;
                    romeon = kiloes[romeon];
                    backup = backup.bind(michal)(romeon);
                    romeon = backup.requestVoiceFilterSwitch;
                    yankee = romeon.bind(backup)(yankee);
                    _fun00018_ip = 694; continue _fun00017;
 663:
                    romeon = _closure1_slot0;
                    backup = _closure1_slot2;
                    yankee = 20;
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
                    yankee = 21;
                    yankee = kiloes[yankee];
                    yankee = backup.bind(michal)(yankee);
                    yankee = yankee.MediaEngineEvent;
                    yankee = yankee.VoiceFiltersFailed;
                    offset = function(argFoo) {
                        report = argFoo;
                        tangon = _closure1_slot10;
                        zuuluu = tangon.warn;
                        michal = global;
                        entity = michal.HermesInternal;
                        oscard = entity.concat;
                        entity = 'Voice Filters failed in process: ';
                        entity = oscard.bind(entity)(report);
                        entity = zuuluu.bind(tangon)(entity);
                        tangon = _closure1_slot1;
                        oscard = _closure1_slot2;
                        entity = 11;
                        zuuluu = oscard[entity];
                        entity = undefined;
                        offset = tangon.bind(entity)(zuuluu);
                        verify = offset.track;
                        zuuluu = _closure1_slot8;
                        option = zuuluu.VOICE_FILTER_ERROR;
                        zuuluu = {};
                        golfie = 'Voice Filters failed in process';
                        zuuluu['error_message'] = golfie;
                        romeon = _closure1_slot0;
                        yankee = 12;
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
                        zuuluu = 13;
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
                    _fun00018_ip = 996; continue _fun00017;
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
                    report = _closure1_slot10;
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
                    zuuluu = 11;
                    zuuluu = option[zuuluu];
                    offset = tangon.bind(michal)(zuuluu);
                    verify = offset.track;
                    zuuluu = _closure1_slot8;
                    report = zuuluu.VOICE_FILTER_ERROR;
                    zuuluu = {};
                    yankee = 'Failed to load Voice Filters module';
                    zuuluu['error_message'] = yankee;
                    golfie = _closure1_slot0;
                    yankee = 12;
                    yankee = option[yankee];
                    romeon = golfie.bind(michal)(yankee);
                    yankee = romeon.serializeError;
                    yankee = yankee.bind(romeon)(oscard);
                    zuuluu['cause'] = yankee;
                    zuuluu = verify.bind(offset)(report, zuuluu);
                    zuuluu = 13;
                    zuuluu = option[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    zuuluu = report.captureException;
                    zuuluu = zuuluu.bind(report)(oscard);
                    zuuluu = 8;
                    zuuluu = option[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    zuuluu['type'] = oscard;
                    oscard = 9;
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
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    oscard = global;
    foxtra = oscard.Object;
    romeon = foxtra.defineProperty;
    offset = {};
    verify = true;
    offset['value'] = verify;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, offset);
    entity = 0;
    offset = option[entity];
    entity = undefined;
    offset = yankee.bind(entity)(offset);
    var _closure1_slot3 = offset;
    offset = 1;
    offset = option[offset];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot4 = offset;
    offset = 2;
    offset = option[offset];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot5 = offset;
    offset = 3;
    offset = option[offset];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot6 = offset;
    offset = 4;
    offset = option[offset];
    offset = golfie.bind(entity)(offset);
    offset = offset.getVoiceFilterModelFileName;
    var _closure1_slot7 = offset;
    offset = 5;
    offset = option[offset];
    offset = golfie.bind(entity)(offset);
    yankee = offset.AnalyticEvents;
    var _closure1_slot8 = yankee;
    offset = offset.Endpoints;
    var _closure1_slot9 = offset;
    offset = 6;
    offset = option[offset];
    offset = golfie.bind(entity)(offset);
    romeon = offset.Logger;
    offset = romeon.prototype;
    yankee = Object.create(offset, {constructor: {value: romeon}});
    sizing = 'VoiceFilterActionCreators';
    output = yankee;
    offset = new output[romeon](sizing, kiloes);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot10 = offset;
    offset = 7;
    offset = option[offset];
    foxtra = golfie.bind(entity)(offset);
    romeon = foxtra.debounce;
    yankee = {};
    yankee['leading'] = verify;
    offset = function() {
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
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
    verify = 1000;
    verify = romeon.bind(foxtra)(offset, verify, yankee);
    var _closure1_slot11 = verify;
    verify = false;
    var _closure1_slot12 = verify;
    oscard = oscard.Map;
    verify = oscard.prototype;
    verify = Object.create(verify, {constructor: {value: oscard}});
    output = verify;
    oscard = new output[oscard](sizing);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot13 = oscard;
    oscard = 22;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/voice_filters/web/VoiceFilterActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: downloadVoiceFilterDependency
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            foxtra = argFoo;
            entity = arguments[1];
            var _closure2_slot0 = foxtra;
            golfie = undefined;
            if(!(entity === golfie)) { _fun00020_ip = 20; continue _fun00019 }
 18:
            entity = null;
 20:
            var _closure2_slot1 = entity;
            var _closure2_slot2 = golfie;
            verify = foxtra.url;
            report = foxtra.modelId;
            _closure2_slot2 = report;
            option = foxtra.fileName;
            tangon = _closure1_slot6;
            entity = tangon.getModelState;
            tangon = entity.bind(tangon)(report);
            oscard = _closure1_slot13;
            entity = oscard.get;
            entity = entity.bind(oscard)(report);
            oscard = null;
            if(!(oscard == entity)) { _fun00020_ip = 422; continue _fun00019 }
 92:
            offset = oscard == tangon;
            romeon = undefined;
            if(offset) { _fun00020_ip = 106; continue _fun00019 }
 101:
            romeon = tangon.status;
 106:
            backup = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = 9;
            offset = offset[yankee];
            offset = backup.bind(golfie)(offset);
            offset = offset.VoiceFilterModelStatus;
            offset = offset.DOWNLOADED;
            if(!(romeon !== offset)) { _fun00020_ip = 402; continue _fun00019 }
 145:
            offset = oscard == tangon;
            oscard = undefined;
            if(offset) { _fun00020_ip = 159; continue _fun00019 }
 154:
            oscard = tangon.status;
 159:
            offset = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[yankee];
            tangon = offset.bind(golfie)(tangon);
            tangon = tangon.VoiceFilterModelStatus;
            tangon = tangon.DOWNLOADING;
            if(!(oscard !== tangon)) { _fun00020_ip = 349; continue _fun00019 }
 195:
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            tangon = 8;
            tangon = offset[tangon];
            romeon = oscard.bind(golfie)(tangon);
            yankee = romeon.dispatch;
            tangon = {};
            backup = 'VOICE_FILTER_DOWNLOAD_STARTED';
            tangon['type'] = backup;
            output = tangon;
            sizing = foxtra;
            foxtra = copyDataProperties(output, sizing);
            tangon = yankee.bind(romeon)(tangon);
            tangon = 10;
            tangon = offset[tangon];
            golfie = oscard.bind(golfie)(tangon);
            oscard = golfie.downloadVoiceFilterFile;
            tangon = function(argFoo) {
                entity = argFoo;
                golfie = entity.downloadedBytes;
                oscard = entity.totalBytes;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
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
            golfie = oscard.bind(golfie)(verify, option, tangon);
            oscard = golfie.then;
            tangon = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    entity = entity.fetchedFromNetwork;
                    if(!entity) { _fun00022_ip = 176; continue _fun00021 }
 17:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    entity = zuuluu[entity];
                    oscard = undefined;
                    tangon = michal.bind(oscard)(entity);
                    zuuluu = tangon.track;
                    entity = _closure1_slot8;
                    michal = entity.VOICE_FILTER_DOWNLOAD_ATTEMPTED;
                    entity = {};
                    golfie = _closure1_slot5;
                    report = golfie.getActiveVoiceFilter;
                    option = report.bind(golfie)();
                    report = null;
                    verify = report != option;
                    golfie = null;
                    if(!verify) { _fun00022_ip = 87; continue _fun00021 }
 84:
                    golfie = option;
 87:
                    entity['active_voice_filter_id'] = golfie;
                    golfie = true;
                    entity['success'] = golfie;
                    option = _closure2_slot0;
                    option = option.voiceFilterId;
                    entity['voice_filter_id'] = option;
                    option = _closure2_slot2;
                    entity['model_id'] = option;
                    option = _closure2_slot1;
                    option = report == option;
                    oscard = undefined;
                    if(option) { _fun00022_ip = 153; continue _fun00021 }
 143:
                    golfie = _closure2_slot1;
                    oscard = golfie.reason;
 153:
                    golfie = report != oscard;
                    report = null;
                    if(!golfie) { _fun00022_ip = 165; continue _fun00021 }
 162:
                    report = oscard;
 165:
                    entity['reason'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 176:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'VOICE_FILTER_FILE_READY';
                    michal['type'] = report;
                    offset = _closure2_slot0;
                    yankee = michal;
                    oscard = copyDataProperties(yankee, offset);
                    oscard = _closure2_slot1;
                    report = 'analyticsContext';
                    michal[report] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            golfie = oscard.bind(golfie)(tangon);
            oscard = golfie.catch;
            tangon = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    oscard = argFoo;
                    entity = null;
                    if(!(entity != oscard)) { _fun00024_ip = 23; continue _fun00023 }
 9:
                    entity = oscard.USER_CANCELED_DOWNLOAD;
                    if(entity) { _fun00024_ip = 276; continue _fun00023 }
 23:
                    tangon = _closure1_slot10;
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
                    michal = 11;
                    michal = report[michal];
                    zuuluu = undefined;
                    yankee = tangon.bind(zuuluu)(michal);
                    offset = yankee.track;
                    michal = _closure1_slot8;
                    verify = michal.VOICE_FILTER_ERROR;
                    michal = {};
                    michal['error_message'] = option;
                    romeon = _closure1_slot0;
                    entity = 12;
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
                    michal = 13;
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
                    _fun00024_ip = 308; continue _fun00023;
 276:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.info;
                    michal = _closure2_slot0;
                    entity = 'User canceled the download for Voice Filter dependency';
                    entity = zuuluu.bind(tangon)(entity, michal);
 308:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
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
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.finally;
            michal = function() {
                zuuluu = _closure1_slot13;
                michal = zuuluu.delete;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = tangon.bind(oscard)(michal);
            tangon = _closure1_slot13;
            zuuluu = tangon.set;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            return michal;
 349:
            michal = global;
            tangon = michal.Promise;
            zuuluu = tangon.reject;
            oscard = michal.Error;
            michal = oscard.prototype;
            report = Object.create(michal, {constructor: {value: oscard}});
            output = 'Voice filter model is downloading but not in active downloads map';
            result = report;
            michal = new result[oscard](output, sizing);
            michal = michal instanceof Object ? michal : report;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 402:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            michal = michal.bind(zuuluu)();
            return michal;
 422:
            return entity;
        }
    };
    zuuluu['downloadVoiceFilterDependency'] = oscard;
    oscard = function() { // Original name: applyVoiceFilterInNativeModule
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['applyVoiceFilterInNativeModule'] = oscard;
    zuuluu['refreshVoiceFiltersCatalog'] = report;
    tangon = function() { // Original name: cancelVoiceFilterDownload
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
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
    zuuluu['cancelVoiceFilterDownload'] = tangon;
    zuuluu['maybeSetupVoiceFiltersNativeModule'] = michal;
    return entity;
})();