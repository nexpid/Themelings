// app/utils/ApplicationAssetUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
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
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
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
            verify = _closure1_slot13;
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
            golfie = _closure1_slot13;
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    var _closure1_slot13 = entity;
    entity = function() { // Original name: updateAssets
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _updateAssets
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 175; continue _fun00007 }
 13:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 5;
                    michal = oscard[michal];
                    golfie = undefined;
                    michal = tangon.bind(golfie)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    verify = _closure1_slot6;
                    option = verify.APPLICATION_ASSETS;
                    option = option.bind(verify)(report);
                    michal['url'] = option;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=92);
 90:
                    return michal;
 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 172; continue _fun00007 }
 98:
                    option = michal.body;
                    oscard = _closure1_slot1;
                    verify = _closure1_slot2;
                    tangon = 6;
                    tangon = verify[tangon];
                    golfie = oscard.bind(golfie)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    verify = 'APPLICATION_ASSETS_UPDATE';
                    tangon['type'] = verify;
                    tangon['applicationId'] = report;
                    tangon['assets'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getApplicationAssets;
                    zuuluu = zuuluu.bind(tangon)(report);
                    return zuuluu;
 172:
                    return michal;
 175:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getApplicationAssetsMap
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot5;
            entity = zuuluu.getApplicationAssets;
            report = entity.bind(zuuluu)(tangon);
            entity = null;
            if(!(entity != report)) { _fun00010_ip = 83; continue _fun00009 }
 27:
            oscard = report.lastUpdated;
            entity = global;
            golfie = entity.Date;
            zuuluu = golfie.now;
            zuuluu = zuuluu.bind(golfie)();
            oscard = zuuluu - oscard;
            zuuluu = 3600000;
            if(!(!(oscard > zuuluu))) { _fun00010_ip = 83; continue _fun00009 }
 64:
            zuuluu = entity.Promise;
            entity = zuuluu.resolve;
            entity = entity.bind(zuuluu)(report);
            _fun00010_ip = 94; continue _fun00009;
 83:
            zuuluu = _closure1_slot14;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 94:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    oscard = function(argFoo, argBar) { // Original name: getAssetFromImageURL
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            entity = _closure1_slot10;
            zuuluu = entity[oscard];
            michal = zuuluu.serialize;
            entity = argBar;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            if(!zuuluu) { _fun00012_ip = 70; continue _fun00011 }
 33:
            michal = zuuluu.toString;
            report = michal.bind(zuuluu)();
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = ':';
            entity = tangon.bind(zuuluu)(oscard, michal, report);
 70:
            return entity;
        }
    };
    var _closure1_slot17 = oscard;
    report = function() { // Original name: getAssets
        entity = undefined;
        tangon = _closure1_slot19;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = report;
    entity = function() { // Original name: _getAssets
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 57; continue _fun00013 }
 7:
                    tangon = _closure1_slot16;
                    zuuluu = undefined;
                    michal = argFoo;
                    michal = tangon.bind(zuuluu)(michal);
                    SaveGenerator(address=28);
 26:
                    return michal;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 54; continue _fun00013 }
 34:
                    tangon = null;
                    tangon = tangon == michal;
                    zuuluu = undefined;
                    if(tangon) { _fun00014_ip = 51; continue _fun00013 }
 45:
                    zuuluu = michal.assets;
 51:
                    return zuuluu;
 54:
                    return michal;
 57:
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
    entity = function() { // Original name: _resolveExternalAssets
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    tangon = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 218; continue _fun00015 }
 13:
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = null;
                            entity = zuuluu != tangon;
                            if(!entity) { _fun00018_ip = 52; continue _fun00017 }
 12:
                            michal = global;
                            michal = michal.Object;
                            michal = michal.prototype;
                            oscard = michal.hasOwnProperty;
                            report = oscard.call;
                            michal = _closure1_slot11;
                            michal = report.bind(oscard)(michal, tangon);
                            entity = !michal;
 52:
                            if(!entity) { _fun00018_ip = 70; continue _fun00017 }
 55:
                            michal = _closure1_slot11;
                            michal = michal[tangon];
                            entity = zuuluu == michal;
 70:
                            return entity;
                        }
                    };
                    verify = zuuluu.bind(tangon)(michal);
                    zuuluu = verify.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00016_ip = 210; continue _fun00015 }
 44:
                    tangon = _closure1_slot12;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 5;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.post;
                    michal = {};
                    yankee = _closure1_slot6;
                    offset = yankee.APPLICATION_EXTERNAL_ASSETS;
                    option = argFoo;
                    option = offset.bind(yankee)(option);
                    michal['url'] = option;
                    option = {};
                    option['urls'] = verify;
                    michal['body'] = option;
                    option = true;
                    michal['oldFormErrors'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=141);
 139:
                    return michal;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 215; continue _fun00015 }
 147:
                    zuuluu = michal.body;
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.bind(oscard)();
                    zuuluu = tangon.done;
                    if(zuuluu) { _fun00016_ip = 210; continue _fun00015 }
 169:
                    zuuluu = tangon.value;
                    verify = zuuluu.url;
                    option = zuuluu.external_asset_path;
                    zuuluu = _closure1_slot11;
                    zuuluu[verify] = option;
                    option = report.bind(oscard)();
                    zuuluu = option.done;
                    tangon = option;
                    if(!zuuluu) { _fun00016_ip = 169; continue _fun00015 }
 210:
                    zuuluu = undefined;
                    return zuuluu;
 215:
                    return michal;
 218:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUrlAssetIds
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            romeon = argBar;
            zuuluu = entity.filter;
            michal = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = argFoo;
                    zuuluu = null;
                    tangon = zuuluu == report;
                    entity = undefined;
                    if(tangon) { _fun00022_ip = 29; continue _fun00021 }
 14:
                    oscard = report.startsWith;
                    tangon = 'http:';
                    entity = oscard.bind(report)(tangon);
 29:
                    if(entity) { _fun00022_ip = 59; continue _fun00021 }
 32:
                    zuuluu = zuuluu == report;
                    michal = undefined;
                    if(zuuluu) { _fun00022_ip = 56; continue _fun00021 }
 41:
                    tangon = report.startsWith;
                    zuuluu = 'https:';
                    michal = tangon.bind(report)(zuuluu);
 56:
                    entity = michal;
 59:
                    return entity;
                }
            };
            michal = zuuluu.bind(entity)(michal);
            michal = michal.length;
            foxtra = 0;
            zuuluu = michal > foxtra;
            michal = 0;
            if(!zuuluu) { _fun00020_ip = 181; continue _fun00019 }
 42:
            zuuluu = entity.length;
            zuuluu = foxtra < zuuluu;
            yankee = undefined;
            verify = 'mp';
            option = null;
            golfie = global;
            oscard = 0;
            report = 0;
            tangon = undefined;
            michal = 0;
            if(!zuuluu) { _fun00020_ip = 181; continue _fun00019 }
 77:
            kiloes = entity[report];
            foxtra = oscard;
            if(!(option != kiloes)) { _fun00020_ip = 163; continue _fun00019 }
 88:
            zuuluu = golfie.Object;
            zuuluu = zuuluu.prototype;
            sizing = zuuluu.hasOwnProperty;
            backup = sizing.call;
            zuuluu = _closure1_slot11;
            backup = backup.bind(sizing)(zuuluu, kiloes);
            zuuluu = undefined;
            if(!backup) { _fun00020_ip = 133; continue _fun00019 }
 125:
            backup = _closure1_slot11;
            zuuluu = backup[kiloes];
 133:
            foxtra = oscard;
            tangon = zuuluu;
            if(!(option != tangon)) { _fun00020_ip = 163; continue _fun00019 }
 143:
            backup = _closure1_slot17;
            backup = backup.bind(yankee)(verify, zuuluu);
            romeon[report] = backup;
            foxtra = oscard + 1;
            tangon = zuuluu;
 163:
            report = report + 1;
            zuuluu = entity.length;
            oscard = foxtra;
            michal = oscard;
            if(report < zuuluu) { _fun00020_ip = 77; continue _fun00019 }
 181:
            entity = entity.length;
            entity = michal === entity;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: updateNonUrlAssetIds
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            foxtra = argFoo;
            romeon = argBar;
            yankee = argBaz;
            offset = argCor;
            entity = foxtra.length;
            verify = 0;
            michal = verify < entity;
            tangon = false;
            golfie = null;
            report = global;
            zuuluu = 0;
            option = undefined;
            entity = false;
            if(!michal) { _fun00024_ip = 171; continue _fun00023 }
 41:
            sizing = foxtra[zuuluu];
            backup = tangon;
            kiloes = option;
            if(!(golfie != sizing)) { _fun00024_ip = 150; continue _fun00023 }
 55:
            michal = romeon[zuuluu];
            backup = tangon;
            kiloes = option;
            if(!(golfie == michal)) { _fun00024_ip = 150; continue _fun00023 }
 69:
            michal = report.Object;
            michal = michal.prototype;
            output = michal.hasOwnProperty;
            michal = output.call;
            michal = michal.bind(output)(yankee, sizing);
            if(!michal) { _fun00024_ip = 104; continue _fun00023 }
 100:
            michal = yankee[sizing];
 104:
            sizing = tangon;
            if(michal) { _fun00024_ip = 135; continue _fun00023 }
 110:
            if(!(golfie != offset)) { _fun00024_ip = 123; continue _fun00023 }
 114:
            output = offset <= verify;
            sizing = true;
            if(!output) { _fun00024_ip = 135; continue _fun00023 }
 123:
            romeon[zuuluu] = golfie;
            backup = tangon;
            kiloes = michal;
            _fun00024_ip = 150; continue _fun00023;
 135:
            output = michal.id;
            romeon[zuuluu] = output;
            backup = sizing;
            kiloes = michal;
 150:
            zuuluu = zuuluu + 1;
            michal = foxtra.length;
            tangon = backup;
            option = kiloes;
            entity = tangon;
            if(zuuluu < michal) { _fun00024_ip = 41; continue _fun00023 }
 171:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    tangon = function() { // Original name: fetchAssetIds
        entity = undefined;
        tangon = _closure1_slot24;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = tangon;
    entity = function() { // Original name: _fetchAssetIds
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    foxtra = argBar;
                    romeon = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00026_ip = 399; continue _fun00025 }
 21:
                    var _closure4_slot0 = option;
                    var _closure4_slot1 = foxtra;
                    golfie = undefined;
                    if(!(romeon === golfie)) { _fun00026_ip = 38; continue _fun00025 }
 35:
                    romeon = 1;
 38:
                    var _closure4_slot2 = romeon;
                    SaveGenerator(address=46);
 44:
                    return golfie;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00026_ip = 396; continue _fun00025 }
 55:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    verify = 6;
                    zuuluu = zuuluu[verify];
                    oscard = tangon.bind(golfie)(zuuluu);
                    tangon = oscard.dispatch;
                    zuuluu = {};
                    offset = 'APPLICATION_ASSETS_FETCH';
                    zuuluu['type'] = offset;
                    zuuluu['applicationId'] = option;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = new Array(0);
                    oscard = foxtra.filter;
                    zuuluu = function(argFoo) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            report = argFoo;
                            zuuluu = null;
                            tangon = zuuluu == report;
                            entity = undefined;
                            if(tangon) { _fun00028_ip = 29; continue _fun00027 }
 14:
                            oscard = report.startsWith;
                            tangon = 'http:';
                            entity = oscard.bind(report)(tangon);
 29:
                            if(entity) { _fun00028_ip = 59; continue _fun00027 }
 32:
                            zuuluu = zuuluu == report;
                            michal = undefined;
                            if(zuuluu) { _fun00028_ip = 56; continue _fun00027 }
 41:
                            tangon = report.startsWith;
                            zuuluu = 'https:';
                            michal = tangon.bind(report)(zuuluu);
 56:
                            entity = michal;
 59:
                            return entity;
                        }
                    };
                    oscard = oscard.bind(foxtra)(zuuluu);
                    offset = oscard.length;
                    zuuluu = 0;
                    if(!(offset > zuuluu)) { _fun00026_ip = 158; continue _fun00025 }
 134:
                    zuuluu = function() { // Original name: resolveExternalAssets
                        entity = undefined;
                        tangon = _closure1_slot20;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(golfie)(option, oscard);
                    SaveGenerator(address=149);
 147:
                    return zuuluu;
 149:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00026_ip = 393; continue _fun00025 }
 158:
                    oscard = _closure1_slot21;
                    oscard = oscard.bind(golfie)(foxtra, tangon);
                    if(oscard) { _fun00026_ip = 347; continue _fun00025 }
 174:
                    oscard = _closure1_slot18;
                    oscard = oscard.bind(golfie)(option);
                    SaveGenerator(address=187);
 185:
                    return oscard;
 187:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(offset) { _fun00026_ip = 344; continue _fun00025 }
 196:
                    backup = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[verify];
                    kiloes = backup.bind(golfie)(offset);
                    backup = kiloes.dispatch;
                    offset = {};
                    sizing = 'APPLICATION_ASSETS_UPDATE';
                    offset['type'] = sizing;
                    offset['applicationId'] = option;
                    offset['assets'] = oscard;
                    offset = backup.bind(kiloes)(offset);
                    offset = _closure1_slot22;
                    source = undefined;
                    update = foxtra;
                    echoed = tangon;
                    result = oscard;
                    output = romeon;
                    offset = source[offset](update, echoed, result, output, sizing);
                    if(offset) { _fun00026_ip = 317; continue _fun00025 }
 269:
                    romeon = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[verify];
                    foxtra = romeon.bind(golfie)(offset);
                    romeon = foxtra.dispatch;
                    offset = {};
                    backup = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                    offset['type'] = backup;
                    offset['applicationId'] = option;
                    offset = romeon.bind(foxtra)(offset);
                    offset = tangon;
                    _fun00026_ip = 341; continue _fun00025;
 317:
                    romeon = _closure1_slot14;
                    foxtra = romeon.bind(golfie)(option);
                    romeon = foxtra.then;
                    yankee = function() {
                        report = _closure1_slot23;
                        tangon = _closure4_slot0;
                        zuuluu = _closure4_slot1;
                        michal = _closure4_slot2;
                        entity = 1;
                        michal = michal - entity;
                        entity = undefined;
                        entity = report.bind(entity)(tangon, zuuluu, michal);
                        return entity;
                    };
                    offset = romeon.bind(foxtra)(yankee);
 341:
                    return offset;
 344:
                    return oscard;
 347:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[verify];
                    golfie = oscard.bind(golfie)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    verify = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                    report['type'] = verify;
                    report['applicationId'] = option;
                    report = oscard.bind(golfie)(report);
                    return tangon;
 393:
                    return zuuluu;
 396:
                    return michal;
 399:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot24 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.Endpoints;
    var _closure1_slot6 = offset;
    offset = golfie.PlatformTypes;
    var _closure1_slot7 = offset;
    golfie = /https:\\/\\/static-cdn\.jtvnw\.net\\/previews-ttv\\/live_user_(.+)-\{width\}x\{height\}.jpg/;
    var _closure1_slot8 = golfie;
    golfie = /https:\\/\\/i\.ytimg\.com\\/vi\\/([a-zA-Z0-9_-]+)\\/hqdefault_live\.jpg/;
    var _closure1_slot9 = golfie;
    golfie = {};
    romeon = offset.SPOTIFY;
    yankee = {};
    foxtra = function(argFoo) { // Original name: deserialize
        entity = global;
        tangon = entity.encodeURIComponent;
        zuuluu = undefined;
        michal = argFoo;
        tangon = tangon.bind(zuuluu)(michal);
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = 'https://i.scdn.co/image/';
        entity = zuuluu.bind(michal)(entity, tangon);
        return entity;
    };
    yankee['deserialize'] = foxtra;
    foxtra = function(argFoo) { // Original name: serialize
        zuuluu = argFoo;
        michal = zuuluu.split;
        entity = 'https://i.scdn.co/image/';
        michal = michal.bind(zuuluu)(entity);
        entity = 1;
        entity = michal[entity];
        return entity;
    };
    yankee['serialize'] = foxtra;
    golfie[romeon] = yankee;
    romeon = offset.TWITCH;
    yankee = {};
    foxtra = function(argFoo, argBar) { // Original name: deserialize
        zuuluu = argBar;
        entity = global;
        report = entity.encodeURIComponent;
        tangon = undefined;
        michal = argFoo;
        backup = report.bind(tangon)(michal);
        michal = 0;
        romeon = zuuluu[michal];
        michal = 1;
        offset = zuuluu[michal];
        entity = entity.HermesInternal;
        report = entity.concat;
        kiloes = 'https://static-cdn.jtvnw.net/previews-ttv/live_user_';
        foxtra = '-';
        yankee = 'x';
        verify = '.jpg';
        entity = kiloes[report](backup, foxtra, romeon, yankee, offset, verify, option);
        return entity;
    };
    yankee['deserialize'] = foxtra;
    foxtra = function(argFoo) { // Original name: serialize
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.match;
            entity = _closure1_slot8;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity != zuuluu;
            if(!michal) { _fun00030_ip = 37; continue _fun00029 }
 30:
            michal = 1;
            entity = zuuluu[michal];
 37:
            return entity;
        }
    };
    yankee['serialize'] = foxtra;
    golfie[romeon] = yankee;
    yankee = offset.YOUTUBE;
    offset = {};
    romeon = function(argFoo) { // Original name: deserialize
        entity = global;
        tangon = entity.encodeURIComponent;
        zuuluu = undefined;
        michal = argFoo;
        tangon = tangon.bind(zuuluu)(michal);
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'https://i.ytimg.com/vi/';
        entity = '/hqdefault_live.jpg';
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    offset['deserialize'] = romeon;
    romeon = function(argFoo) { // Original name: serialize
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.match;
            entity = _closure1_slot9;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity != zuuluu;
            if(!michal) { _fun00032_ip = 37; continue _fun00031 }
 30:
            michal = 1;
            entity = zuuluu[michal];
 37:
            return entity;
        }
    };
    offset['serialize'] = romeon;
    golfie[yankee] = offset;
    yankee = {};
    offset = function(argFoo) { // Original name: deserialize
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        entity = zuuluu[entity];
        report = undefined;
        tangon = michal.bind(report)(entity);
        entity = global;
        michal = entity.window;
        michal = michal.GLOBAL_ENV;
        zuuluu = michal.MEDIA_PROXY_ENDPOINT;
        michal = null;
        zuuluu = michal != zuuluu;
        michal = 'MEDIA_PROXY_ENDPOINT not configured';
        michal = tangon.bind(report)(zuuluu, michal);
        tangon = entity.URL;
        michal = entity.location;
        michal = michal.protocol;
        entity = entity.window;
        entity = entity.GLOBAL_ENV;
        entity = entity.MEDIA_PROXY_ENDPOINT;
        oscard = michal + entity;
        entity = tangon.prototype;
        michal = Object.create(entity, {constructor: {value: tangon}});
        golfie = argFoo;
        option = michal;
        entity = new option[tangon](golfie, oscard, report);
        michal = entity instanceof Object ? entity : michal;
        entity = michal.toString;
        entity = entity.bind(michal)();
        return entity;
    };
    yankee['deserialize'] = offset;
    offset = function(argFoo) { // Original name: serialize
        entity = argFoo;
        return entity;
    };
    yankee['serialize'] = offset;
    offset = 'mp';
    golfie[offset] = yankee;
    var _closure1_slot10 = golfie;
    golfie = {};
    var _closure1_slot11 = golfie;
    golfie = 9;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/ApplicationAssetUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['getAssetFromImageURL'] = oscard;
    oscard = function(argFoo, argBar, argBaz) { // Original name: getAssetImage
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            kiloes = argFoo;
            tangon = argBar;
            golfie = argBaz;
            michal = null;
            if(!(michal != tangon)) { _fun00034_ip = 35; continue _fun00033 }
 15:
            entity = tangon.includes;
            zuuluu = ':';
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00034_ip = 372; continue _fun00033 }
 35:
            if(!(michal != kiloes)) { _fun00034_ip = 43; continue _fun00033 }
 39:
            if(!(michal == tangon)) { _fun00034_ip = 47; continue _fun00033 }
 43:
            entity = undefined;
            return entity;
 47:
            report = global;
            oscard = report.Array;
            entity = oscard.isArray;
            entity = entity.bind(oscard)(golfie);
            option = golfie;
            if(!entity) { _fun00034_ip = 111; continue _fun00033 }
 71:
            verify = report.Math;
            oscard = verify.max;
            entity = new Array(0);
            ctrled = 0;
            sequen = entity;
            vacuum = golfie;
            offset = arraySpread(sequen, vacuum, ctrled);
            sequen = oscard;
            vacuum = entity;
            ctrled = verify;
            option = apply(sequen, vacuum, ctrled);
 111:
            backup = '';
            oscard = 'number';
            entity = typeof option;
            foxtra = backup;
            if(!(oscard === entity)) { _fun00034_ip = 187; continue _fun00033 }
 129:
            verify = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 8;
            oscard = oscard[entity];
            entity = undefined;
            oscard = verify.bind(entity)(oscard);
            entity = oscard.getBestMediaProxySize;
            option = entity.bind(oscard)(option);
            entity = report.HermesInternal;
            oscard = entity.concat;
            entity = '?size=';
            foxtra = oscard.bind(entity)(option);
 187:
            entity = report.window;
            entity = entity.GLOBAL_ENV;
            entity = entity.CDN_HOST;
            if(!(michal == entity)) { _fun00034_ip = 291; continue _fun00033 }
 209:
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
            oscard = oscard[entity];
            entity = undefined;
            oscard = option.bind(entity)(oscard);
            entity = oscard.getAPIBaseURL;
            sequen = entity.bind(oscard)();
            entity = report.HermesInternal;
            verify = entity.concat;
            vacuum = '/applications/';
            source = '/app-assets/';
            echoed = '.png';
            config = backup;
            ctrled = kiloes;
            update = tangon;
            result = foxtra;
            entity = config[verify](sequen, vacuum, ctrled, source, update, echoed, result, output);
            _fun00034_ip = 370; continue _fun00033;
 291:
            oscard = report.location;
            sequen = oscard.protocol;
            oscard = report.window;
            oscard = oscard.GLOBAL_ENV;
            ctrled = oscard.CDN_HOST;
            report = report.HermesInternal;
            offset = report.concat;
            vacuum = '//';
            source = '/app-assets/';
            echoed = '/';
            output = '.png';
            config = backup;
            update = kiloes;
            result = tangon;
            sizing = foxtra;
            entity = config[offset](sequen, vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes);
 370:
            return entity;
 372:
            entity = tangon.split;
            oscard = entity.bind(tangon)(zuuluu);
            tangon = _closure1_slot3;
            report = undefined;
            entity = 2;
            tangon = tangon.bind(report)(oscard, entity);
            entity = 0;
            option = tangon[entity];
            entity = 1;
            oscard = tangon[entity];
            entity = _closure1_slot7;
            entity = entity.TWITCH;
            if(!(option !== entity)) { _fun00034_ip = 487; continue _fun00033 }
 427:
            entity = global;
            entity = entity.Object;
            entity = entity.prototype;
            verify = entity.hasOwnProperty;
            tangon = verify.call;
            entity = _closure1_slot10;
            tangon = tangon.bind(verify)(entity, option);
            entity = undefined;
            if(!tangon) { _fun00034_ip = 485; continue _fun00033 }
 466:
            tangon = _closure1_slot10;
            option = tangon[option];
            tangon = option.deserialize;
            entity = tangon.bind(option)(oscard);
 485:
            _fun00034_ip = 601; continue _fun00033;
 487:
            if(!(michal != golfie)) { _fun00034_ip = 534; continue _fun00033 }
 491:
            tangon = 'number';
            michal = typeof golfie;
            if(!(tangon !== michal)) { _fun00034_ip = 534; continue _fun00033 }
 502:
            tangon = _closure1_slot10;
            michal = _closure1_slot7;
            michal = michal.TWITCH;
            tangon = tangon[michal];
            michal = tangon.deserialize;
            michal = michal.bind(tangon)(oscard, golfie);
            _fun00034_ip = 598; continue _fun00033;
 534:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 7;
            zuuluu = oscard[zuuluu];
            report = tangon.bind(report)(zuuluu);
            zuuluu = report.prototype;
            tangon = Object.create(zuuluu, {constructor: {value: report}});
            sequen = 'ApplicationAssetUtils';
            config = tangon;
            zuuluu = new config[report](sequen, vacuum);
            report = zuuluu instanceof Object ? zuuluu : tangon;
            tangon = report.warn;
            zuuluu = 'getAssetImage: size must === [number, number] for Twitch';
            zuuluu = tangon.bind(report)(zuuluu);
            michal = undefined;
 598:
            entity = michal;
 601:
            return entity;
        }
    };
    zuuluu['getAssetImage'] = oscard;
    zuuluu['getAssets'] = report;
    zuuluu['fetchAssetIds'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getAssetIds
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            report = argBar;
            entity = new Array(0);
            zuuluu = _closure1_slot21;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(report, entity);
            if(zuuluu) { _fun00036_ip = 77; continue _fun00035 }
 25:
            golfie = _closure1_slot5;
            oscard = golfie.getApplicationAssets;
            zuuluu = argFoo;
            golfie = oscard.bind(golfie)(zuuluu);
            oscard = null;
            option = oscard == golfie;
            zuuluu = undefined;
            if(option) { _fun00036_ip = 60; continue _fun00035 }
 54:
            zuuluu = golfie.assets;
 60:
            if(!(oscard != zuuluu)) { _fun00036_ip = 75; continue _fun00035 }
 64:
            michal = _closure1_slot22;
            michal = michal.bind(tangon)(report, entity, zuuluu);
 75:
            return entity;
 77:
            return entity;
        }
    };
    zuuluu['getAssetIds'] = michal;
    return entity;
})();