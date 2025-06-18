// app/lib/spellcheck/Spellchecker.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argBar;
        option = argBaz;
        zuuluu = argFre;
        golfie = argPlu;
        var _closure1_slot0 = oscard;
        var _closure1_slot1 = option;
        var _closure1_slot2 = golfie;
        entity = function(argFoo) { // Original name: normalizeLocale
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                report = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                entity = michal[entity];
                michal = undefined;
                entity = report.bind(michal)(entity);
                entity = entity[tangon];
                oscard = null;
                if(!(oscard != entity)) { _fun00004_ip = 41; continue _fun00003 }
 38:
                tangon = entity;
 41:
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 8;
                entity = golfie[entity];
                option = report.bind(michal)(entity);
                golfie = option.parse;
                verify = tangon.replace;
                entity = /[_-]/g;
                report = '-';
                entity = verify.bind(tangon)(entity, report);
                entity = golfie.bind(option)(entity);
                verify = tangon;
                if(!(oscard != entity)) { _fun00004_ip = 140; continue _fun00003 }
 108:
                tangon = entity.langtag;
                tangon = tangon.language;
                if(!(oscard != tangon)) { _fun00004_ip = 140; continue _fun00003 }
 124:
                tangon = entity.langtag;
                tangon = tangon.region;
                if(!(oscard == tangon)) { _fun00004_ip = 185; continue _fun00003 }
 140:
                oscard = _closure1_slot8;
                tangon = oscard.error;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                option = zuuluu.concat;
                golfie = '';
                zuuluu = ' is not a valid locale.';
                zuuluu = option.bind(golfie)(verify, zuuluu);
                zuuluu = tangon.bind(oscard)(zuuluu);
                return michal;
 185:
                michal = entity.langtag;
                entity = michal.language;
                michal = michal.region;
                zuuluu = entity.language;
                entity = zuuluu.toLowerCase;
                tangon = entity.bind(zuuluu)();
                entity = michal.toUpperCase;
                zuuluu = entity.bind(michal)();
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = '';
                entity = michal.bind(entity)(tangon, report, zuuluu);
                return entity;
            }
        };
        var _closure1_slot12 = entity;
        entity = function() { // Original name: _install
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot3;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 146; continue _fun00005 }
 10:
                        tangon = _closure1_slot9;
                        michal = tangon.getAvailableDictionaries;
                        michal = michal.bind(tangon)();
                        SaveGenerator(address=33);
 31:
                        return michal;
 33:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 143; continue _fun00005 }
 39:
                        tangon = null;
                        oscard = michal;
                        if(!(tangon == oscard)) { _fun00006_ip = 52; continue _fun00005 }
 48:
                        oscard = new Array(0);
 52:
                        report = oscard.map;
                        tangon = _closure1_slot12;
                        golfie = report.bind(oscard)(tangon);
                        oscard = golfie.filter;
                        option = _closure1_slot0;
                        report = _closure1_slot2;
                        tangon = 12;
                        tangon = report[tangon];
                        report = undefined;
                        tangon = option.bind(report)(tangon);
                        tangon = tangon.isNotNullish;
                        verify = oscard.bind(golfie)(tangon);
                        zuuluu = _closure1_slot10;
                        tangon = zuuluu.prototype;
                        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                        offset = tangon;
                        zuuluu = new offset[zuuluu](verify, option);
                        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                        tangon = function(argFoo) { // Original name: attachToInput
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                michal = argFoo;
                                var _closure5_slot0 = michal;
                                michal = global;
                                zuuluu = michal.document;
                                tangon = zuuluu.body;
                                zuuluu = null;
                                if(!(zuuluu != tangon)) { _fun00008_ip = 65; continue _fun00007 }
 28:
                                michal = michal.document;
                                report = michal.body;
                                tangon = report.addEventListener;
                                zuuluu = 'beforeinput';
                                michal = function(argFoo) {
                                    tangon = _closure1_slot11;
                                    zuuluu = _closure5_slot0;
                                    entity = argFoo;
                                    michal = entity.target;
                                    entity = undefined;
                                    entity = tangon.bind(entity)(zuuluu, michal);
                                    return entity;
                                };
                                entity = true;
                                entity = tangon.bind(report)(zuuluu, michal, entity);
 65:
                                entity = undefined;
                                return entity;
                            }
                        };
                        tangon = tangon.bind(report)(zuuluu);
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
        verify = entity.Object;
        report = verify.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(verify)(zuuluu, entity, tangon);
        entity = 0;
        tangon = golfie[entity];
        entity = undefined;
        tangon = option.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        tangon = 1;
        tangon = golfie[tangon];
        tangon = option.bind(entity)(tangon);
        var _closure1_slot4 = tangon;
        tangon = 2;
        tangon = golfie[tangon];
        tangon = option.bind(entity)(tangon);
        var _closure1_slot5 = tangon;
        tangon = 3;
        tangon = golfie[tangon];
        tangon = option.bind(entity)(tangon);
        var _closure1_slot6 = tangon;
        tangon = 4;
        tangon = golfie[tangon];
        tangon = option.bind(entity)(tangon);
        var _closure1_slot7 = tangon;
        tangon = 5;
        tangon = golfie[tangon];
        verify = option.bind(entity)(tangon);
        tangon = verify.prototype;
        report = Object.create(tangon, {constructor: {value: verify}});
        foxtra = 'Spellchecker';
        backup = report;
        tangon = new backup[verify](foxtra, romeon);
        tangon = tangon instanceof Object ? tangon : report;
        var _closure1_slot8 = tangon;
        report = 6;
        tangon = golfie[report];
        verify = option.bind(entity)(tangon);
        tangon = null;
        verify = tangon == verify;
        tangon = undefined;
        if(verify) { _fun00002_ip = 237; continue _fun00001 }
 222:
        report = golfie[report];
        report = option.bind(entity)(report);
        tangon = report.spellCheck;
 237:
        var _closure1_slot9 = tangon;
        tangon = function() {
            tangon = _closure1_slot6;
            zuuluu = function(argFoo) { // Original name: Spellchecker
                oscard = argFoo;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = oscard;
                golfie = _closure1_slot5;
                tangon = _closure2_slot0;
                entity = undefined;
                tangon = golfie.bind(entity)(report, tangon);
                tangon = true;
                report['_enabled'] = tangon;
                tangon = '';
                report['misspelledWord'] = tangon;
                tangon = new Array(0);
                report['corrections'] = tangon;
                tangon = _closure1_slot7;
                option = tangon.locale;
                golfie = option.split;
                tangon = '-';
                option = golfie.bind(option)(tangon);
                golfie = _closure1_slot4;
                tangon = 2;
                golfie = golfie.bind(entity)(option, tangon);
                tangon = 0;
                option = golfie[tangon];
                var _closure3_slot2 = option;
                tangon = 1;
                tangon = golfie[tangon];
                report['regionPreference'] = tangon;
                tangon = report.getAvailableLanguages;
                tangon = tangon.bind(report)(oscard);
                var _closure3_slot3 = tangon;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 9;
                tangon = golfie[tangon];
                golfie = oscard.bind(entity)(tangon);
                tangon = golfie.prototype;
                oscard = Object.create(tangon, {constructor: {value: golfie}});
                verify = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tangon = argFoo;
                        michal = _closure3_slot0;
                        oscard = michal.regionPreference;
                        michal = global;
                        michal = michal.HermesInternal;
                        report = michal.concat;
                        zuuluu = '';
                        michal = '-';
                        zuuluu = report.bind(zuuluu)(tangon, michal, oscard);
                        report = _closure3_slot1;
                        michal = report.indexOf;
                        report = michal.bind(report)(zuuluu);
                        michal = -1;
                        if(!(michal === report)) { _fun00010_ip = 137; continue _fun00009 }
 69:
                        michal = _closure3_slot3;
                        report = michal[tangon];
                        michal = null;
                        if(!(michal == report)) { _fun00010_ip = 116; continue _fun00009 }
 83:
                        golfie = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 7;
                        oscard = oscard[tangon];
                        tangon = undefined;
                        oscard = golfie.bind(tangon)(oscard);
                        tangon = _closure3_slot2;
                        report = oscard[tangon];
 116:
                        if(!(michal != report)) { _fun00010_ip = 152; continue _fun00009 }
 120:
                        tangon = _closure3_slot0;
                        michal = tangon.setLocale;
                        michal = michal.bind(tangon)(report);
                        _fun00010_ip = 152; continue _fun00009;
 137:
                        michal = _closure3_slot0;
                        entity = michal.setLocale;
                        entity = entity.bind(michal)(zuuluu);
 152:
                        entity = undefined;
                        return entity;
                    }
                };
                yankee = oscard;
                offset = option;
                tangon = new yankee[golfie](offset, verify, option);
                tangon = tangon instanceof Object ? tangon : oscard;
                report['languageDetector'] = tangon;
                report = _closure1_slot9;
                tangon = report.on;
                zuuluu = 'spellcheck-result';
                michal = function(argFoo, argBar) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        oscard = argFoo;
                        michal = argBar;
                        report = _closure3_slot0;
                        zuuluu = null;
                        golfie = zuuluu != oscard;
                        tangon = '';
                        if(!golfie) { _fun00012_ip = 29; continue _fun00011 }
 26:
                        tangon = oscard;
 29:
                        report['misspelledWord'] = tangon;
                        entity = _closure3_slot0;
                        if(!(zuuluu == michal)) { _fun00012_ip = 47; continue _fun00011 }
 43:
                        michal = new Array(0);
 47:
                        entity['corrections'] = michal;
                        entity = undefined;
                        return entity;
                    }
                };
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            var _closure2_slot0 = zuuluu;
            entity = {};
            michal = 'enabled';
            entity['key'] = michal;
            michal = function() { // Original name: get
                entity = this;
                entity = entity._enabled;
                return entity;
            };
            entity['get'] = michal;
            michal = function(argFoo) { // Original name: set
                michal = argFoo;
                entity = this;
                entity['_enabled'] = michal;
                entity = undefined;
                return entity;
            };
            entity['set'] = michal;
            michal = new Array(9);
            michal[0] = entity;
            entity = {};
            oscard = 'setLearnedWords';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                zuuluu = _closure1_slot9;
                michal = zuuluu.setLearnedWords;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[1] = entity;
            entity = {};
            oscard = 'setLocale';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = argFoo;
                    var _closure3_slot0 = tangon;
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.setLocale;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 48; continue _fun00013 }
 33:
                    michal = zuuluu.then;
                    entity = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tangon = _closure1_slot8;
                            zuuluu = tangon.info;
                            report = _closure3_slot0;
                            entity = global;
                            entity = entity.HermesInternal;
                            michal = entity.concat;
                            entity = 'Switching to ';
                            michal = michal.bind(entity)(report);
                            entity = '(unavailable)';
                            report = argFoo;
                            if(!report) { _fun00016_ip = 62; continue _fun00015 }
 56:
                            entity = '(available)';
 62:
                            entity = zuuluu.bind(tangon)(michal, entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[2] = entity;
            entity = {};
            oscard = 'setAppLocale';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                zuuluu = argFoo;
                michal = zuuluu.split;
                entity = '-';
                michal = michal.bind(zuuluu)(entity);
                entity = 1;
                michal = michal[entity];
                entity = this;
                entity['regionPreference'] = michal;
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[3] = entity;
            entity = {};
            oscard = 'detectLanguage';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = this;
                    michal = entity.enabled;
                    if(!michal) { _fun00018_ip = 31; continue _fun00017 }
 11:
                    zuuluu = entity.languageDetector;
                    michal = zuuluu.process;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[4] = entity;
            entity = {};
            oscard = 'getAvailableLanguages';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                tangon = argFoo;
                entity = {};
                var _closure3_slot0 = entity;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.split;
                        entity = '-';
                        report = zuuluu.bind(michal)(entity);
                        tangon = _closure1_slot4;
                        entity = undefined;
                        zuuluu = 1;
                        tangon = tangon.bind(entity)(report, zuuluu);
                        zuuluu = 0;
                        tangon = tangon[zuuluu];
                        zuuluu = _closure3_slot0;
                        report = zuuluu[tangon];
                        oscard = null;
                        if(!(oscard != report)) { _fun00020_ip = 61; continue _fun00019 }
 58:
                        michal = report;
 61:
                        zuuluu[tangon] = michal;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['value'] = oscard;
            michal[5] = entity;
            entity = {};
            oscard = 'isMisspelled';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = this;
                    zuuluu = michal.misspelledWord;
                    entity = '';
                    entity = entity !== zuuluu;
                    if(!entity) { _fun00022_ip = 33; continue _fun00021 }
 20:
                    zuuluu = michal.misspelledWord;
                    michal = argFoo;
                    entity = michal === zuuluu;
 33:
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[6] = entity;
            entity = {};
            oscard = 'getCorrectionsForMisspelling';
            entity['key'] = oscard;
            oscard = function(argFoo, argBar) { // Original name: value
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = this;
                    tangon = michal.isMisspelled;
                    zuuluu = argFoo;
                    entity = argBar;
                    entity = tangon.bind(michal)(zuuluu, entity);
                    if(entity) { _fun00024_ip = 30; continue _fun00023 }
 24:
                    entity = new Array(0);
                    _fun00024_ip = 36; continue _fun00023;
 30:
                    entity = michal.corrections;
 36:
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[7] = entity;
            entity = {};
            oscard = 'replaceMisspelling';
            entity['key'] = oscard;
            report = function(argFoo) { // Original name: value
                zuuluu = _closure1_slot9;
                michal = zuuluu.replaceMisspelling;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = report;
            michal[8] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        tangon = tangon.bind(entity)();
        var _closure1_slot10 = tangon;
        report = 10;
        report = golfie[report];
        offset = option.bind(entity)(report);
        verify = offset.debounce;
        option = function(argFoo, argBar) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zuuluu = argFoo;
                tangon = argBar;
                entity = null;
                report = entity == tangon;
                michal = null;
                if(report) { _fun00026_ip = 174; continue _fun00025 }
 20:
                verify = _closure1_slot0;
                oscard = _closure1_slot2;
                option = 11;
                golfie = oscard[option];
                oscard = undefined;
                yankee = verify.bind(oscard)(golfie);
                offset = yankee.isElement;
                golfie = global;
                verify = golfie.HTMLInputElement;
                verify = offset.bind(yankee)(tangon, verify);
                if(verify) { _fun00026_ip = 169; continue _fun00025 }
 68:
                offset = _closure1_slot0;
                verify = _closure1_slot2;
                verify = verify[option];
                offset = offset.bind(oscard)(verify);
                verify = offset.isElement;
                golfie = golfie.HTMLTextAreaElement;
                golfie = verify.bind(offset)(tangon, golfie);
                if(golfie) { _fun00026_ip = 169; continue _fun00025 }
 106:
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                report = report[option];
                golfie = golfie.bind(oscard)(report);
                report = golfie.isElement;
                report = report.bind(golfie)(tangon);
                michal = undefined;
                if(!report) { _fun00026_ip = 174; continue _fun00025 }
 139:
                golfie = tangon.hasAttribute;
                report = 'contenteditable';
                report = golfie.bind(tangon)(report);
                michal = undefined;
                if(!report) { _fun00026_ip = 174; continue _fun00025 }
 161:
                michal = tangon.textContent;
                _fun00026_ip = 174; continue _fun00025;
 169:
                michal = tangon.value;
 174:
                if(!(entity != michal)) { _fun00026_ip = 191; continue _fun00025 }
 178:
                entity = zuuluu.detectLanguage;
                entity = entity.bind(zuuluu)(michal);
 191:
                entity = undefined;
                return entity;
            }
        };
        report = 250;
        report = verify.bind(offset)(option, report);
        var _closure1_slot11 = report;
        report = 13;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'lib/spellcheck/Spellchecker.tsx';
        report = oscard.bind(golfie)(report);
        zuuluu['Spellchecker'] = tangon;
        michal = function() { // Original name: install
            entity = undefined;
            tangon = _closure1_slot13;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu['install'] = michal;
        return entity;
    }
})();